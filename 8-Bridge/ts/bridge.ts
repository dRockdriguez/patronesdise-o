interface ListImplementor {
    add(element: number): void;
    getElements(): number[];
}

class OrderedList implements ListImplementor {
    private elements: number[] = [];

    add(element: number): void {
        this.elements.push(element);
        this.elements.sort();
    }

    getElements(): number[] {
        return this.elements;
    }
}

class UniqueList implements ListImplementor {
    private elements: number[] = [];

    add(element: number): void {
        if (!this.elements.includes(element)) {
            this.elements.push(element);
        }
    }

    getElements(): number[] {
        return this.elements;
    }
}

interface DataAbstraction {
    implementor: ListImplementor;

    add(element: number): void;
    get(): number[];
    operation(fn: (e: number) => number): number[];
}

class DataRefinedAbstraction implements DataAbstraction {
    implementor: ListImplementor;

    constructor(implementor: ListImplementor) {
        this.implementor = implementor;
    }

    add(element: number): void {
        this.implementor.add(element);
    }

    get(): number[] {
        return this.implementor.getElements();
    }

    operation(fn: (e: number) => number): number[] {
        return this.implementor.getElements().map(fn);
    }
}

const uniqueList = new DataRefinedAbstraction(new UniqueList());
uniqueList.add(3);
uniqueList.add(3);
uniqueList.add(4);
uniqueList.add(3);
uniqueList.add(1);
console.table(uniqueList.get())

const orderedList = new DataRefinedAbstraction(new OrderedList());
orderedList.add(3);
orderedList.add(3);
orderedList.add(4);
orderedList.add(3);
orderedList.add(1);
console.table(orderedList.get());

const uniqueBy2 = uniqueList.operation((e: number) => e * 2);
console.table(uniqueBy2);
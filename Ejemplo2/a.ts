interface IList<T> {
    setList(list: T[]): void;
    add(element: T): void;
    getElements(): T[];
}


interface IListAbstraction<T> {
    implementor: IList<T>;

    create(list: T[]): void;
    add(element: T): void;
    get(): T[];
}

class ListOrdered<T> implements IList<T> {
    private list: T[] = [];
    sort: (e: T[]) => T[];

    constructor(sort: (e: T[]) => T[]) {
        this.sort = sort;
    }

    setList(list: T[]): void {
        this.list = list;
        this.sort(this.list);
    }


    add(element: T): void {
        this.list.push(element);
        this.sort(this.list);
    }

    getElements(): T[] {
        return this.list;
    }
}

class ListUnique<T> implements IList<T> {
    private list: T[] = [];
    unique: (e: T[]) => T[];

    constructor(unique: (e: T[]) => T[]) {
        this.unique = unique;
    }

    setList(list: T[]): void {
        this.list = this.unique(list);
    }


    add(element: T): void {
        this.list.push(element);
        this.list = this.unique(this.list);
    }

    getElements(): T[] {
        return this.list;
    }
}

class List<T> implements IListAbstraction<T> {
    implementor: IList<T>;

    constructor(implementor: IList<T>) {
        this.implementor = implementor;
    }

    create(list: T[]): void {
        this.implementor.setList(list);
    }

    add(element: T): void {
        this.implementor.add(element);
    }

    get(): T[] {
        return this.implementor.getElements();
    }
}


interface Person {
    age: number;
    name: string;
    id: number;
}

const sortStrings = (arr: string[]) => arr.sort();
const stringList = new List<string>(new ListOrdered<string>(sortStrings));

stringList.create(["uno", "dos", "tres"]);
console.table(stringList.get());


const sortPerson = (arr: Person[]) =>
    arr.sort((a: Person, b: Person) => a.age - b.age);
const personList = new List<Person>(new ListOrdered<Person>(sortPerson));

personList.add({
    age: 13,
    name: "Pepe",
    id: 1
});
personList.add({
    age: 33,
    name: "Jose",
    id: 1
});
personList.add({
    age: 56,
    name: "Maria",
    id: 1
});
console.table(personList.get());


const uniquePerson = (arr: Person[]) => {
    const result: Person[] = [];

    arr.forEach((person) => {
        const finded = result.find((p) => p.id === person.id);
        if (!finded) {
            result.push(person);
        }
    });

    return result;
};

const uniquePersonList = new List<Person>(new ListUnique<Person>(uniquePerson));
uniquePersonList.add({
    age: 13,
    name: "Pepe",
    id: 1
});
uniquePersonList.add({
    age: 33,
    name: "Jose",
    id: 2
});
uniquePersonList.add({
    age: 56,
    name: "Maria",
    id: 1
});
console.table(uniquePersonList.get());
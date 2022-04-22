class Example {
    protected prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }

    info(): string {
        return `El valor de prop es: ${this.prop}`
    }
}

const example = new Example('prop');
console.log(example.info());

// Herencia
class Example1 extends Example {
    private prop2: number;

    constructor(prop: string, prop2: number) {
        super(prop);
        this.prop2 = prop2;
    }

    info(): string {
        return `El valor de prop es ${this.prop} y el de prop2 es ${this.prop2}`
    }
}
const example1 = new Example1('prop', 2);
console.log(example1.info());

// Interfaces
interface Example2 {
    prop1: string,
    prop2: number,
    info(): string
}
class ExampleInterface implements Example2 {
    prop1: string;
    prop2: number;

    constructor(prop1: string, prop2: number) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }

    info(): string {
        return `El valor de prop es ${this.prop1} y el de prop2 es ${this.prop2}`
    }
}

class ExampleInterface1 implements Example2 {
    prop1: string;
    prop2: number;
    prop3: string;

    constructor(prop1: string, prop2: number, prop3: string) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        this.prop3 = prop3;
    }

    info(): string {
        return `El valor de prop es ${this.prop1}, el de prop2 es ${this.prop2} y prop 3 es ${this.prop3}`
    }
}

const arr: Example2[] = [new ExampleInterface('prop1', 1), new ExampleInterface1('prop1', 1, 'prop3')];
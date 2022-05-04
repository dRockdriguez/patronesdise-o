class Person {
    private name: string;
    private lastName: string;
    private age: number;
    private country: string;
    private city: string;
    private hobbies: string[];

    constructor(name: string, lastName: string, age: number, country: string, city: string, hobbies: string[]) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
}

interface PersonBuilder {
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    setName(name: string): PersonBuilder;
    setLastName(lastName: string): PersonBuilder;
    setAge(age: number): PersonBuilder;
    setCountry(country: string): PersonBuilder;
    setCity(city: string): PersonBuilder;
    addHobby(hobby: string): PersonBuilder;
    build(): Person;
}

class NormalPersonBuilder implements PersonBuilder {
    name: string = "";
    lastName: string = "";
    age: number = 0;
    country: string = "";
    city: string = "";
    hobbies: string[] = [];

    constructor() {
        this.reset();
    }

    reset() {
        this.name = "";
        this.lastName = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    setName(name: string): PersonBuilder {
        this.name = name;
        return this;
    }

    setLastName(lastName: string): PersonBuilder {
        this.lastName = lastName;
        return this;
    }

    setAge(age: number): PersonBuilder {
        this.age = age;
        return this;
    }

    setCountry(country: string): PersonBuilder {
        this.country = country;
        return this;
    }

    setCity(city: string): PersonBuilder {
        this.city = city;
        return this;
    }

    addHobby(hobby: string): PersonBuilder {
        this.hobbies.push(hobby);
        return this;
    }

    build(): Person {
        const person = new Person(this.name, this.lastName, this.age, this.country, this.city, this.hobbies);

        this.reset();

        return person;
    }
}

class PersonDirector {
    private builder: PersonBuilder;

    constructor(builder: PersonBuilder) {
        this.builder = builder;
    }

    setPersonBuilder(builder: PersonBuilder) {
        this.builder = builder;
    }

    createSimplePerson(name: string, lastName: string) {
        return this.builder.setName(name).setLastName(lastName).build();
    }

    createCompletePerson(name: string, lastName: string, age: number, city: string) {
        return this.builder.setName(name).setLastName(lastName).setAge(age).setCity(city).build();
    }
}

const normalBuilder = new NormalPersonBuilder();
const personDirector = new PersonDirector(normalBuilder);

const person = personDirector.createSimplePerson("David", "Rodríguez");
const person2 = personDirector.createCompletePerson("David", "Rodríguez", 31, "Madrid");

console.table(person);
console.table(person2);
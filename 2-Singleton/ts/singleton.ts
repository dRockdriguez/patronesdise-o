class Singleton {
    private static instance: Singleton;
    public random: number;

    private constructor() {
        this.random = Math.random();
    }

    public static getInstance(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

const singleton = Singleton.getInstance();
const singleton1 = Singleton.getInstance();

console.log(singleton.random);
console.log(singleton1.random);

singleton.random = 18;

console.log(singleton.random);
console.log(singleton1.random);
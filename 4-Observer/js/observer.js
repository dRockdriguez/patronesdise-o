class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter((o) => o !== observer);
    }

    notify(data) {
        this.observers.forEach((o) => o.refresh(data));
    }
}

class Observer {
    constructor(fn) {
        this.fn = fn;
    }

    refresh(data) {
        this.fn(data);
    }
}

const subject = new Subject();
const observer1 = new Observer((d) => console.log(`Observer1 ${d}`));
const observer2 = new Observer((d) => document.querySelector("#div1").innerHTML = d);
const observer3 = new Observer((d) => document.querySelector("#div2").innerHTML = d.split("").reverse().join(""));

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

function change() {
    subject.notify(document.querySelector("#text").value)
}
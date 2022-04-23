// Component
class GreetingComponent {
    constructor(name) {
        this.name = name;
    }

    getGreeting() {
        return `Hello ${this.name}`;
    }
}

// Decorator
class GreetingDecorator {
    constructor(greeting) {
        this.greeting = greeting;
    }
    
    getGreeting() {
        return this.greeting.getGreeting();
    }
}

class GreetingDetailDecorator extends GreetingDecorator {
    constructor(greeting, gender) {
        super(greeting);
        this.gender = gender;
    }

    getGreeting() {
        return `${super.getGreeting()} eres ${this.gender}`;
    }
}

const greeting = new GreetingComponent('David');
console.log(greeting.getGreeting());

const detail = new GreetingDetailDecorator(greeting, 'H');
console.log(detail.getGreeting());

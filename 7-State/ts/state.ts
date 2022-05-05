interface State {
    next(ticket: Ticket): number | null;
    add(ticket: Ticket, quantity: number): void;
}

class Ticket {
    private state: State;
    quantity: number;
    readonly limit: number;
    private index: number;

    constructor(limit: number) {
        this.limit = limit;
        this.quantity = 0;
        this.index = 0;
        this.state = new EmptyState();
    }

    get nextIndex(): number {
        return this.index++;
    }

    set nextState(state: State) {
        this.state = state;
    }

    get currentState(): State {
        return this.state;
    }

    next(): number | null {
        return this.state.next(this);
    }

    add(quantity: number): void {
        return this.state.add(this, quantity);
    }
}

class EmptyState implements State {
    next(ticket: Ticket): number | null {
        return null;
    }

    add(ticket: Ticket, quantity: number): void {
        if (quantity < ticket.limit) {
            ticket.quantity = quantity;
            ticket.nextState = new WithDataState();
        } else if (quantity == ticket.limit) {
            ticket.quantity = quantity;
            ticket.nextState = new FullState();
        }
    }
}

class WithDataState implements State {
    next(ticket: Ticket): number | null {
        ticket.quantity--;

        if (ticket.quantity <= 0) {
            ticket.nextState = new EmptyState();
        }

        return ticket.nextIndex;
    }

    add(ticket: Ticket, quantity: number): void {
        if (ticket.quantity + quantity < ticket.limit) {
            ticket.quantity += quantity;
        } else if (ticket.quantity + quantity == ticket.limit) {
            ticket.quantity += quantity;
            ticket.nextState = new FullState();
        }
    }
}

class FullState implements State {
    next(ticket: Ticket): number | null {
        ticket.quantity--;

        if (ticket.quantity <= 0) {
            ticket.nextState = new EmptyState();
        } else {
            ticket.nextState = new WithDataState();
        }

        return ticket.nextIndex;
    }

    add(ticket: Ticket, quantity: number): void {
        console.error("Lleno!!!")
    }
}

const ticket = new Ticket(5);
console.log(ticket.currentState);
console.log(ticket.next());
ticket.add(6);
console.log(ticket.currentState);
console.log(ticket.next());
ticket.add(4);
console.log(ticket.currentState);
console.log(ticket.next());
console.log(ticket.next());
ticket.add(3);
console.log(ticket.currentState);
ticket.add(1);
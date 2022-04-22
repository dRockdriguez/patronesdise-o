interface Strategy {
    login(user: string, password: string): boolean
}

class LoginContext {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginBBDDStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log(`Login BBDD ${user} ${password}`);
        return true;
    }
}

class LoginLDAPStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log(`Login LDAP ${user} ${password}`);
        return true;
    }
}

const auth = new LoginContext(new LoginBBDDStrategy());
auth.login('user', 'password');

auth.setStrategy(new LoginLDAPStrategy());
auth.login('user', 'password');
 
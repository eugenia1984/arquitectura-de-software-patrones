
interface Strategy {
    login(user: string, password: string): boolean;
}


// El contexto
class LoginContext {
    // Atributo
    private strategy: Strategy;
    // Constructor
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }
    // Setter
    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }
    // Método
    login(user: string, password: string) {
        return this.strategy.login(user, password);
    }
}

// la estrategia LoginDBStrategy
class LoginDBStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("nos dirigimos a la base de datos");

        if (user === "admin" && password === "entra") {
            return true;
        }

        return false;
    }
}

// La estrategia: LoginServiceStrategy
class LoginServiceStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("Nos dirigimos a un servicio de autentificación")

        if (user === "admin" && password === "entra") {
            return true
        }

        return false
    }
}

// La estrategia: LoginGoogleStrategy 
class LoginGoogleStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("Nos dirigimos a un GOOGLE de autentificación")

        if (user === "admin" && password === "entra") {
            return true
        }

        return false
    }
}

// Ejecución
const auth = new LoginContext(new LoginDBStrategy())
auth.login("admin", "entra")

auth.setStrategy(new LoginServiceStrategy())
auth.login("admin", "entra")

auth.setStrategy(new LoginGoogleStrategy())
auth.login("admin", "entra")


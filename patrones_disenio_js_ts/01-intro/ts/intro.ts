/********** clases y objetos *****/
class Drink {
    // tributo privado, no se puede acceder fuera del contexto de la clase
    private name: string;
    // constructor con los parametros tipados
    constructor(name: string) {
        this.name = name;
    }

    info(): string {
        return this.name;
    }
}

// Instancio un nuevo objeto de la clase Drink
const drink = new Drink("agua")
// Como el atributo drink en privado no lo puedo invocar
// si hago drink.name me da error
console.log(drink.info())

/*********** Interface ***********/
// Permite categorizar los objetos
// El objeto tendrá un comportamiento esperado, tendrá un contrato con la interface

/**
 * Price: number el precio del producto
 * getPrice(): string metodo que retorna un string
 */ 
interface Product {
    price: number
    getPrice(): string
}

/*******  herencia e implementación de interface ****/
class Beer extends Drink implements Product {
    // Atributo privado, heredado de la clase Padre Drink
    private alcohol: number;
    // atributo publico, debe tenerlo al implementar la interface
    price: number;
    // constructor
    constructor(name: string, alcohol: number, price: number) {
        super(name); // el constructor de la clase padre
        this.alcohol = alcohol;
        this.price = price;
    }
    // Metodo heredado de la clase Padre Drink
    info(): string {
        return super.info() + " " + this.alcohol;
    }
    // Al implementar la interface debe tener su metodo implementado
    getPrice(): string {
        return "$ " + this.price;
    }
}

// implementación de interface
class Snack implements Product {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): string {
        return "El precio es: $ " + this.price;
    }
}

const beer = new Beer("erdinger", 8.5, 5);
console.log(beer.info());

// el array de products va a ser un array con elementos 
// de interface Product
const products: Product[] = [
    new Beer("corona", 4.5, 1),
    new Snack("papas", 0.5),
    new Beer("heineken", 5, 1.2),
];

function getPrices(items: Product[]) {
    for (const item of items) {
        console.log(item.getPrice());
    }
}

getPrices(products);
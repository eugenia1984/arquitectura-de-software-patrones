/****************************************************************/
/******************* PROGRAMACIÓN FUNCIONAL  *******************/
/***************************************************************/

/******************** FUNCIÓN PRIMER ORDEN ********************/
// Toda funcion que puede ser tratada como una variable, puede:
// guardar una función, puede ejecutar la fucnión y puede ser enviada
// como parámetro a otras funciones
function sum(a, b) {
  return a + b
}

let res = sum(1, 2)
console.log(res)

const fSum = sum // guardo la función en la constante fSum
res = fSum(5, 6) // variable que tiene guardado un funcionamiento y guardo valor en res
console.log(res)

/**************** FUNCION DE ORDEN SUPERIOR *************/
// Toda función que puede recibir en parámetros funciones
function operation(fn, a, b) {
  console.log('Se hace algo')
  console.log(fn(a, b))
}

operation(sum, 10, 20) // OUTPUT: Se hace algo 30

/********************** ARROW FUNCTION ********************/
// función anónima de JavaScript
// Return implícito por tener el return en una sola línea
operation((a, b) => a * b, 5, 5)

operation(
  (a, b) => {
    const c = a + b
    return c * 2
  },
  1,
  2
)

/*********************************************************************/
/********************** MÉTODOS DE ARRAYS ***************************/
/********************************************************************/
// Arrya: un listado que puede almacenar distintos tipos de elementos

// FOR EACH
// Recorre el array, elemento por elemento
// y por cada iteración ejecuta una función determinada, que yo le termino
// Es un método INMUTABLE, no cambia el array original.
// hay métodos mutables, como por ejemplo .sort(), me ordena y modifica el array original
const names = ['Héctor', 'Juan', 'Ana', 'Pablo', 'María']
names.forEach((name) => console.log(name))
names.forEach((name) => console.log(name.toUpperCase()))
console.log(names)

/********************** MAP **********************/
// Recorre cada elemento del array, y genera un nuevo array
// con los valores modificados, acorde a lo que le indiqué
// en la fucnión de primer orden que le pasé
const namesUpper = names.map((name) => name.toUpperCase())
console.log(namesUpper)
console.log(names)

/************************ REDUCE ********************/
// Hace un recorrido por todos los elementos.
// Pero hace un acumulado, que se define
// Se tiene un solo resultado final
// Recibe 2 params: función y valor inicial

const numbers = [5, 4, 7, 1, 10]
const total = numbers.reduce((ac, number) => ac + number, 0)
console.log(total)

/*****************************************************/
/****** PROGRAMACION ORIENTADA A OBJETOS *************/
/*****************************************************/

/*********************  clase  **********************/
// Una clase es un MOLDE para crear(instanciar) OBJETOS
// Tienen PROPIEDADES y METODOS
class Drink {
  // constrctor para instanciar un objeto de la clase
  constructor(name) {
    this.name = name
  }
  // método
  info() {
    return `La bebida es: ${this.name}`
  }
}

/************  objetos con funciones  ***********/
function Drink2(name) {
  this.name = name
  this.info = function () {
    return  `La bebida es: ${this.name}`
  }
}

// Con la palabra reserva NEW instancio un objeto de la clase
const drink = new Drink('agua')
console.log(drink.info())

const drink2 = new Drink2('agua 2')
console.log(drink2.info())

/****************  Herencia  ****************/
// Nos permite reutilizar código
// Se utiliza la palabra reservada "extends"
class Beer extends Drink {
  constructor(name, alcohol) {
    super(name) // El constructor de la clase padre
    this.alcohol = alcohol // Atributos propios de la clase hija
  }
  // super() invoca al construcotor de la clase padre
  info() {
    return super.info() + ' ' + this.alcohol
  }
}

const beer = new Beer('Erdinger', 8.5)
console.log(beer.info())

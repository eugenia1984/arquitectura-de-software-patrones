class SingletonTS {
    // Hago que sea privado, para no acceder 
    // por fuera de la clase y cambiarme el instance 
    // y asi me aseguro que solo sea crea una sola instancia
    // -> imposibilito que se acceda desde afuera
    
    // Y además especifico que es de tipo SingletonTS
    private static instance: SingletonTS

    // Si tengo random: number por default es PUBLIC
    public random: number

    // paso el cosntructor a PRIVATE
    private constructor() {
        this.random = Math.random()
    }

    // Paso el codigo del cosntructor
    // a un método que evalue si ya existe
    // Por eso este método si es STATIC
    public static getInstance(): SingletonTS {
        // Si no existe lo creo
        if (!this.instance) {
            this.instance = new SingletonTS()
        }
        // Como ya existe lo retorno
        return this.instance
    }
}

// SingletonTS.instance = null
// da error por protegerlo haciendolo PRIVATE

//const singleton = new SingletonTC()
// da error, porque protegi al constructor con PRIVATE

// Obtengo los objetos con .getInstance no con el contructor(porque es PRIVATE)
const singleton1 = SingletonTS.getInstance()
console.log(singleton1.random)

const singleton2 = SingletonTS.getInstance()
console.log(singleton2.random)

singleton1.random = 7

console.log(singleton1.random)
console.log(singleton2.random)

console.log(singleton1 === singleton2)

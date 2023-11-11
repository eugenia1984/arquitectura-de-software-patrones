/****** PATRÓN DE DISEÑO - SINGLETON ******/
// Que sol oexista una sola clase

class Singleton {

    static getInstance() {
        return Singleton.instance;
    }

    // Agrego los console.log para entender los pasos
    constructor() {
        console.log("Entrando al constructor")
        this.random = Math.random();
        // El truco es en el constructor evaluamos
        // si algo que pertenece a la clase Singleton existe o no existe
        // Si Existe lo regreso
        if (Singleton.instance) {
            console.log("Ya existe")
            return Singleton.instance;
        }
        // Si no existe lo creo y le asigno un objeto de si mismo
        console.log("No existe")
        Singleton.instance = this;
    }

}

let singleton = new Singleton();
let singleton2 = new Singleton();

 // La primera vez no existe y lo crea
    // Ya en las proximas si existe y regresa la isntancia que ya existe en memoria
    // Por eso veo que los Math.random son iguales en los 2 objetos
console.log(singleton.random);
console.log(singleton2.random);

console.log(`singleton === singleton2 : ${singleton === singleton2}`)

// EJEMPLO PRÁCTICO --------------------------------------
// singleton sobre un objeto que lleve los días de la semana
// en español y en inglés
class WeekDays{
    daysEs = ["Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",   
            "Domingo"];
    daysEn = ["Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"];

    constructor(lang){
        this.lang = lang

        if (WeekDays.instance) {
            return WeekDays.instance
        }

        WeekDays.instance = this;  
    }

    getDays(){
        return this.lang === "es" ? this.daysEs : this.daysEn
    }
}

const weekDays = new WeekDays("en")
const weekDays2 = new WeekDays()
// Por mas que luego intente crearlo en Español ya no puedo
// Se crea una sola vez y fue en inglés
const weekDays3 = new WeekDays("es") 
const weekDays4 = weekDays3

console.log("------ Ejercicio práctico --------")
console.log("weekDays: ",weekDays.getDays())
console.log("weekDays2: ", weekDays2.getDays())
console.log("weekDays3: ", weekDays3.getDays())
console.log("weekDays4: ",weekDays4.getDays())



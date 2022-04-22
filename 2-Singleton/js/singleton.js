// Sirve para que solamente exista una instancia de nuestra clase
class Singleton {
  constructor() {
    if (Singleton.instance) {
      console.log("El singleton ya está instanciado");
      return Singleton.instance;
    }

    console.log("El singleton no está instanciado");

    this.random = Math.random();
    Singleton.instance = this;
  }

  static getInstance() {
    if (Singleton.instance) {
      console.log("El singleton ya está instanciado");
      return Singleton.instance;
    }

    console.log("El singleton no está instanciado");

    this.random = Math.random();
    Singleton.instance = this;
  }
}

const singleton = new Singleton();
const singleton1 = new Singleton();
const singleton2 = Singleton.getInstance();

console.log(singleton.random);
console.log(singleton1.random);
console.log(singleton2.random);

// Ejemplo práctico

class WeekDays {
  weekDays = {
    es: [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ],
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      " Thrusday",
      "Friday",
      "Saturday",
    ],
  };

  constructor(lang) {
    if (WeekDays.instance) {
      return WeekDays.instance;
    }

    this.lang = lang;
    WeekDays.instance = this;
  }

  get days() {
      return this.weekDays[this.lang];
  }
}

const esDays = new WeekDays('es');
console.log(esDays.days)

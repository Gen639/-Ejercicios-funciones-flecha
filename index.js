// 1. Funciones flecha
// function saludar() {
//   return "Hola";
// }

const saludar = () => "Hola";

// function division(a, b) {
//   return a / b;
// }

const division = (a, b) => a / b;

// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }

const miNombre = (nombre) => `Mi nombre es ${nombre}`;

// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }

const test2 = () => console.log("Función test 2 ejecutada.");
const test1 = (callback) => callback();

// 2. Foreach
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

const gente25 = [];
gente.forEach((persona) => {
  if (persona.edad > 25) {
    gente25.push(persona);
  }
});
console.log(gente25);

const genteJota = [];
gente.forEach((persona) => {
  if (persona.nombre[0] === "J") {
    genteJota.push(persona);
  }
});
console.log(genteJota);

const gente25Map = gente
  .map((persona) => {
    if (persona.edad > 25) {
      return persona;
    }
  })
  .filter((persona) => persona !== undefined);

console.log(gente25Map);

const genteJotaMap = gente
  .map((persona) => {
    if (persona.nombre[0] === "J") {
      return persona;
    }
  })
  .filter((persona) => persona !== undefined);

console.log(genteJotaMap);

const numbers = [4, 5, 6, 7, 8, 9, 10];
const numbersElevated = numbers.map((number) => number ** number);
console.log(numbersElevated);

//4. Filter

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2Impares = numbers2.filter((number) => number % 2 === 1);
console.log(numbers2Impares);

const foodList = [
  { name: "Tempeh", isVeggie: true },
  { name: "Cheesbacon burguer", isVeggie: false },
  { name: "Tofu burguer", isVeggie: true },
  { name: "Entrecot", isVeggie: false },
];

const platosVeganos = foodList.filter((plato) => {
  return plato.isVeggie;
});
function queRico(arr) {
  for (element of arr) {
    console.log("Que rico " + element.name + " me voy a comer!");
  }
}
queRico(platosVeganos);

// 5. Reduce
const numeros = [39, 2, 4, 25, 62];
const numerosReduce = numeros.reduce((a, b) => a * b);
console.log(numerosReduce);

// Extras

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const staffString = staff.map((worker) => {
  return `${worker.name} es ${worker.role} y le gusta ${worker.hobbies[0]} y ${worker.hobbies[1]}`;
});
console.log(staffString);

const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
const foodList2String = foodList2.map((food) => {
  if (food === "Pizza") {
    return "Como soy de Italia, amo comer Pizza";
  } else if (food === "Ramen") {
    return "Como soy de Japón, amo comer Ramen";
  } else if (food === "Paella") {
    return "Como soy de Valencia, amo comer Paella";
  } else if (food === "Entrecot") {
    return "Aunque no como carne, el Entrecot es sabroso";
  }
});
console.log(foodList2String);

const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

const newInventory = inventory
  .filter((item) => item.price > 300)
  .map((item) => item.name);

console.log(newInventory);

const sentenceElements = [
  "Me",
  "llamo",
  "Evgeny",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

const newSentence = sentenceElements.reduce((a, b) => a + " " + b);
console.log(newSentence);

'use strict';
// PROTOTIPOS

//string
const myName = 'Raul';
console.log(myName.length);

//Number
const myAge = 28;
console.log(myAge.toFixed(1));

//Array
const myJobs = [1, 2, 3];
console.log(myJobs.length);

// indexOf
const valores = ['Diego', 'Jose', 'Pedro'];
console.log(valores.indexOf('Diego'));

// push
const valores2 = ['Anibal', 'Ernesto', 'Koki'];
const valores3 = valores2.push('Raul');
console.log(valores2);

// pop
const valores4 = ['perro', 'gato', 'mono', 'delfin', 'tiburon'];
console.log(valores4.pop());
console.log(valores4);

// OBJETOS
// Objeto literal
const persona = {
    nombre: "Raul",
    edad: 28,
    ciudad: "Lima",
}
console.log(persona);

// Agregar
const persona2 = { nombre: "Juan", edad: 25 };
Object.assign(persona2, { ciudad: "Trujillo", trabajo: "Front-end" });
console.log(persona2);

// Mostrar info
const objeto = {
    a: 'nombre',
    b: 22,
    c: true,
}
console.log(Object.values(objeto));

// Destructuring
const frutas = {
    fruta1:"Uva", 
    fruta2:"Pera", 
    fruta3:"Fresa"};
const {fruta1, fruta2, fruta3} = frutas;
console.log(fruta1);
console.log(fruta3);

// This
const otraPersona = {
    nombre: "Maria",
    edad: 28,
    ciudad: "Tarapoto",
    saludo: function(){
        console.log("Hola, me llamo " + this.nombre + " y tengo " + this.edad + ".");
    }
}
otraPersona.saludo();

// FUNCIONES
// Declaracion
function saludo(){
    console.log("Hola mundo.");
}
saludo();

// Expresion
const saludar = function(){
    console.log("Hola clase.");
}
saludar();

// Arrow function
const sumar = (a, b) => {
    return a + b;
}
console.log(sumar(10, 14));
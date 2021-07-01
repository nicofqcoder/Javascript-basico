var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length);

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

// Push agrega elementos al final del array
var masFrutas = frutas.push("Uvas");
// Pop elimina elementos del array
var ultimo = frutas.pop("Uvas");
// Unshift agrega elementos al inicio
var nuevaLongitud = frutas.unshift("Uvas");
// Shift elimina el elemento al inicio
var borrarFruta = frutas.shift("Uvas");
// Indexof devuelve la posición del elemento
var posicion = frutas.indexOf("Cereza");

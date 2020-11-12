//Suma

const x = 7;
const y = 11;
const suma = x + y;
alert("El resultado de la suma es: " + suma);

// Resta
const a = 15;
const b = 5;
const resta = a - b;
alert("El resultado de la resta es: " + resta);

//Mayusculas y Minusculas

const mensaje = "La Voz De Tu Cabeza Siempre Tiene El Mismo Volumen";

console.log(mensaje);
console.log(mensaje.toUpperCase());
console.log(mensaje.toLowerCase());

// Quitando espacios vacios
const texto = "    No puedes hacerte cosquillas a ti mismo ";
console.log(texto);
console.log(texto.trim());

// Separar palabras

const pecados = "Avaricia Gula Lujuria Pereza Ira Orgullo Envidia";
const arreglo = pecados.split(" ");
console.log(pecados);
console.log(arreglo);

// Separar Correo
const email = "Carlos_Valle_Ramirez@hotmail.com";
console.log(email);
console.log(email.split("@"));

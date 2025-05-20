// Importamos el módulo readline para interacción con el usuario
const readline = require('readline');
// necesario para la lectura de datos por consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("----------------------Ejercio del bucle for-----------------------");
// definimos el array
let arr = [ 2, 3, 4, 5, 8]; // --> 22

// recorremos el array con un bucle for, para realizar la suma
let suma = 0;
for(let i = 0; i < arr.length; i++){
    suma = suma + arr[i]
};
// mostramos el resultado en la consola
console.log("\nLa suma de los elementos del array es: " + suma);

console.log("\n----------------------Ejercio del bucle while-----------------------");

// pedimos un número al usuario
rl.question("Ingresa un número: ", procesarNumero);
// función para procesar el número ingresado
function procesarNumero(input) {
    // Convertimos la entrada a un número
    let numero = parseFloat(input);
    // Validamos la entrada
    // Si la entrada no es un número, mostramos un mensaje de error
    if (isNaN(numero)) {
        console.log("Entrada no válida. Por favor ingresa un número.");
    } else if (numero < 0) {
        console.log("Has ingresado un número negativo. Programa terminado.");
        return rl.close();
    } else {
        console.log("Has ingresado: " + numero);
    }

    // Continuar el bucle pidiendo otro número
    rl.question("Ingresa otro número: ", procesarNumero);
}

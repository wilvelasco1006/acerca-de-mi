const prompt = require('prompt-sync')();

const contraseñaCorrecta = "pepe123";
let entrada;

do {
    entrada = prompt("Ingrese la contraseña: ");
    if (entrada !== contraseñaCorrecta) {
        console.log("Contraseña incorrecta. Intente nuevamente.");
    }
} while (entrada !== contraseñaCorrecta);

console.log("Contraseña correcta. Bienvenido.");

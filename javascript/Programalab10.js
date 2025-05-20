// Importamos el módulo readline para interacción con el usuario
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función auxiliar para convertir las consultas en promesas
function pregunta(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
            resolve(respuesta);
        });
    });
}

// Función principal asíncrona que ejecuta todos los ejercicios
async function ejecutarEjercicios() {
    console.log("========== EJERCICIO 1: EVALUACIÓN DE CALIFICACIONES ==========");
    await ejercicio1();

    console.log("\n========== EJERCICIO 2: NÚMERO PAR O IMPAR ==========");
    await ejercicio2();

    console.log("\n========== EJERCICIO 3: EVALUACIÓN DE DESCUENTOS ==========");
    await ejercicio3();

    console.log("\n========== EJERCICIO 4: JUEGO DE ADIVINANZA ==========");
    await ejercicio4();

    // Cerramos la interfaz
    rl.close();
}

// Ejercicio 1: Evaluación de calificaciones
async function ejercicio1() {
    const calificacionTexto = await pregunta("Por favor, ingresa una calificación entre 0 y 100: ");
    const calificacion = parseFloat(calificacionTexto);

    // Validación de entrada
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        console.log("Error: Ingresa una calificación válida entre 0 y 100.");
        return await ejercicio1(); // Volvemos a pedir la calificación
    }

    // Evaluación de la calificación
    if (calificacion >= 90) {
        console.log("Aprobado con honores");
    } else if (calificacion >= 70) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
}

// Ejercicio 2: Número par o impar
async function ejercicio2() {
    const numeroTexto = await pregunta("Por favor, ingresa un número: ");
    const numero = parseInt(numeroTexto);

    // Validación de entrada
    if (isNaN(numero)) {
        console.log("Error: Ingresa un número válido.");
        return await ejercicio2(); // Volvemos a pedir el número
    }

    // Evaluación si es par o impar
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

// Ejercicio 3: Evaluación de descuentos
async function ejercicio3() {
    const montoTexto = await pregunta("Por favor, ingresa el monto total de tu compra: $");
    const monto = parseFloat(montoTexto);

    // Validación de entrada
    if (isNaN(monto) || monto < 0) {
        console.log("Error: Ingresa un monto válido (debe ser un número positivo).");
        return await ejercicio3(); // Volvemos a pedir el monto
    }

    let montoFinal = monto;
    let descuento = 0;

    // Evaluación del descuento
    if (monto > 100) {
        descuento = monto * 0.1; // 10% de descuento
        montoFinal = monto - descuento;
        console.log(`¡Se ha aplicado un descuento del 10%! ($${descuento.toFixed(2)})`);
    } else {
        console.log("No se aplica descuento para montos menores o iguales a $100.");
    }

    console.log(`Monto original: $${monto.toFixed(2)}`);
    console.log(`Monto final a pagar: $${montoFinal.toFixed(2)}`);
}

// Ejercicio 4: Juego de adivinanza
async function ejercicio4() {
    // Generar un número aleatorio entre 1 y 10
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;

    const adivinanzaTexto = await pregunta("Adivina un número entre 1 y 10: ");
    const adivinanza = parseInt(adivinanzaTexto);

    // Validación de entrada
    if (isNaN(adivinanza) || adivinanza < 1 || adivinanza > 10) {
        console.log("Error: Ingresa un número válido entre 1 y 10.");
        return await ejercicio4(); // Volvemos a pedir la adivinanza
    }

    // Verificar si adivinó
    if (adivinanza === numeroSecreto) {
        console.log("¡Felicidades, adivinaste el número!");
    } else {
        console.log(`Lo siento, el número era ${numeroSecreto}`);
    }

    // Preguntar si quiere jugar de nuevo
    const jugarNuevamente = await pregunta("¿Quieres jugar otra vez? (s/n): ");
    if (jugarNuevamente.toLowerCase() === 's' || jugarNuevamente.toLowerCase() === 'si') {
        return await ejercicio4();
    }
}

// Iniciar la ejecución
ejecutarEjercicios().catch(error => {
    console.error('Ocurrió un error:', error);
    rl.close();
});
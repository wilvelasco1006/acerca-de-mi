// PARTE 1: DECLARACIÓN Y MANIPULACIÓN DE VARIABLES
console.log("---- PARTE 1: VARIABLES ----");

// Declaración de variables
let nombre = "Wilmer";
let edad = 25;
let esEstudiante = true;

// Mostrar valores iniciales
console.log("Valores iniciales:");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?:", esEstudiante);

// Cambiar valores de variables
nombre = "Juan";
edad = 30;
esEstudiante = false;

// Mostrar nuevos valores
console.log("\nNuevos valores después del cambio:");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?:", esEstudiante);

// PARTE 2: OPERACIONES MATEMÁTICAS Y COMPARACIÓN
console.log("\n---- PARTE 2: OPERACIONES MATEMÁTICAS Y COMPARACIÓN ----");

// Declaración de variables numéricas
const a = 10;
const b = 5;

// Realizar operaciones matemáticas
console.log("Valores: a =", a, ", b =", b);
console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);

// Comparaciones
console.log("\nComparaciones:");
console.log("a == b:", a == b);
console.log("a != b:", a != b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);

// PARTE 3: OPERADORES LÓGICOS Y CONCATENACIÓN DE STRINGS
console.log("\n---- PARTE 3: OPERADORES LÓGICOS Y CONCATENACIÓN ----");

// Declaración de variables booleanas
const esMayorDeEdad = true;
const tieneLicencia = false;

// Usar operadores lógicos
const puedeConducir = esMayorDeEdad && tieneLicencia;

console.log("¿Es mayor de edad?:", esMayorDeEdad);
console.log("¿Tiene licencia?:", tieneLicencia);
console.log("¿Puede conducir? (AND lógico):", puedeConducir);
console.log("¿Al menos cumple un requisito para conducir? (OR lógico):", esMayorDeEdad || tieneLicencia);

// Concatenación de strings
const nombrePersona = "Wilmer";
const apellidoPersona = "Velasco";
const edadPersona = 25;

// Concatenación tradicional
const mensajeBienvenida1 = "¡Hola, " + nombrePersona + " " + apellidoPersona + "! Tienes " + edadPersona + " años.";
console.log("\nMensaje con concatenación tradicional:");
console.log(mensajeBienvenida1);

// Template literals 
const mensajeBienvenida2 = `¡Hola, ${nombrePersona} ${apellidoPersona}! Tienes ${edadPersona} años.`;
console.log("\nMensaje con template literals:");
console.log(mensajeBienvenida2);

// Evaluación condicional con operador ternario
const mensajeConducir = `${nombrePersona} ${puedeConducir ? "puede conducir" : "no puede conducir"} legalmente.`;
console.log(mensajeConducir);

console.log("\n---- FIN DEL SCRIPT ----");
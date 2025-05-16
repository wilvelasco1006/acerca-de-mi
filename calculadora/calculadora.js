// laboratorio entregable numero 3
// Declaración de variables
// let num_1 = Number(prompt("Ingrese el primer número: "));
// let num_2 = Number(prompt("Ingrese el segundo número: "));
// let operacion = ["suma", "resta", "multiplicacion", "division"];
// // Declaración de la variable resultado y las operaciones.

// let suma = operacion[0];
// let resta = operacion[1];
// let multiplicacion = operacion[2];
// let division = operacion[3];

// Esperar a que el documento esté cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los elementos del DOM
    const form = document.getElementById("calculadoraForm");
    const resultado = document.getElementById("resultado");
    const historialLista = document.getElementById("historialLista");

    // Función para realizar operaciones
    function realizarOperacion(num1, num2, operacion) {
        if (operacion === "suma") {
            return num1 + num2;
        } else if (operacion === "resta") {
            return num1 - num2;
        } else if (operacion === "multiplicacion") {
            return num1 * num2;
        } else if (operacion === "division") {
            if (num2 === 0) {
                return "No puedes dividir entre 0";
            } else {
                return num1 / num2;
            }
        } else {
            return "Operación no válida";
        }
    }

    // Función para convertir operación a símbolo
    function operacionASigno(operacion) {
        switch (operacion) {
            case "suma":
                return "+";
            case "resta":
                return "-";
            case "multiplicacion":
                return "×";
            case "division":
                return "÷";
            default:
                return "";
        }
    }

    // Función para agregar operación al historial
    function agregarAlHistorial(num1, num2, operacion, resultadoCalculo) {
        const nuevoItem = document.createElement("li"); // Crear un nuevo elemento de lista
        nuevoItem.textContent = `${num1} ${operacionASigno(operacion)} ${num2} = ${resultadoCalculo}`;// Formato de la operación
        historialLista.prepend(nuevoItem); // Agrega al principio de la lista

        // Limitar historial a 5 elementos
        if (historialLista.children.length > 5) {
            historialLista.removeChild(historialLista.lastChild);// Eliminar el último elemento si hay más de 5
        }
    }

    // Evento de envío del formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores ingresados
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const operacion = document.getElementById("operation").value;

        // Validar que los números sean válidos
        if (isNaN(num1) || isNaN(num2)) {
            resultado.textContent = "Por favor, ingresa números válidos.";
            return;
        }

        // Realizar la operación
        const res = realizarOperacion(num1, num2, operacion);

        // Formatear el resultado para mostrar máximo 2 decimales si es necesario
        let resultadoFormateado;
        if (typeof res === "number") {
            resultadoFormateado = Number.isInteger(res) ? res : res.toFixed(2);
        } else {
            resultadoFormateado = res;
        }

        // Mostrar el resultado
        resultado.textContent = `El resultado es: ${resultadoFormateado}`;

        // Añadir la operación al historial
        agregarAlHistorial(num1, num2, operacion, resultadoFormateado);
    });
    const btnSalir = document.querySelector("button[type='button']");
    btnSalir.addEventListener("click", function (event) {
        const respuesta = confirm("¿Deseas realizar otra operación?");

        if (respuesta) {
            // Limpiar campos para nueva operación
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("operation").selectedIndex = 0;
            document.getElementById("num1").focus();
            resultado.textContent = "Comienza una nueva operación";
        } else {
            // Mostrar mensaje de despedida
            resultado.textContent =
                "¡Gracias por usar la calculadora! Hasta pronto.";

            // Deshabilitar controles del formulario para indicar fin
            document.getElementById("num1").disabled = true;
            document.getElementById("num2").disabled = true;
            document.getElementById("operation").disabled = true;
            document.querySelector("button[type='submit']").disabled = true;
            btnSalir.disabled = true;

            // Agregar mensaje al historial
            const mensajeDespedida = document.createElement("li");
            mensajeDespedida.textContent = "Sesión finalizada";
            mensajeDespedida.style.fontWeight = "bold";
            mensajeDespedida.style.color = "#1A2D42";
            historialLista.prepend(mensajeDespedida);
        }
    });
});
// Función para mostrar mensajes de las secciones
function mostrarMensaje(seccion) {
    let mensaje = '';

    switch (seccion) {
        case 'sobre-mi':
            mensaje = 'Estás en la sección Sobre Mí. Aquí puedes conocer más acerca de quién soy.';
            break;
        case 'proyectos':
            mensaje = 'Estás en la sección Proyectos. Aquí puedes ver los proyectos que he desarrollado.';
            break;
        case 'tareas':
            mensaje = 'Estás en la sección de Tareas Pendientes. Esta es mi lista prioritaria.';
            break;
        case 'horario':
            mensaje = 'Estás en la sección de Horario Semanal. Aquí puedes ver mi rutina de estudio.';
            break;
        case 'redes':
            mensaje = 'Estás en la sección de Redes Sociales. ¡Conéctate conmigo!';
            break;
        case 'contacto':
            mensaje = 'Estás en la sección de Contacto. Puedes enviarme un mensaje directamente.';
            break;
        default:
            mensaje = 'Bienvenido a mi página web personal.';
    }

    alert(mensaje);
    return mensaje;
}

document.addEventListener('DOMContentLoaded', function () {
    // Toggle para la navegación móvil
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.querySelector('.navbar');

    navToggle.addEventListener('click', function (e) {
        e.preventDefault();
        navbar.classList.toggle('nav-open');
        console.log('Menu toggle clicked');
    });

    // Manejo de dropdowns en móvil
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector('.dropbtn');

        dropdownBtn.addEventListener('click', function (e) {
            // Prevenir navegación si estamos en móvil
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');

                // Cerrar otros dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });
            }
        });
    });

    // Agregar eventos a los enlaces de navegación para mostrar mensajes
    const enlaces = document.querySelectorAll('.nav-links a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            // Obtener el id de la sección (quitar el #)
            const seccionId = this.getAttribute('href').substring(1);

            // Solo para enlaces principales (no submenús)
            if (!this.classList.contains('dropbtn')) {
                mostrarMensaje(seccionId);
            }
        });
    });
});
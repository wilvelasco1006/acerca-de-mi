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
});
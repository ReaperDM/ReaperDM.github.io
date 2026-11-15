// =====================================
// MENÚ DE NAVEGACIÓN
// =====================================

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");

        const menuAbierto = nav.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", menuAbierto);
        menuToggle.innerHTML = menuAbierto
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Cerrar el menú al seleccionar una sección
    nav.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", () => {
            nav.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

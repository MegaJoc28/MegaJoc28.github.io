
document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("conocimientos-title");
    const content = document.getElementById("conocimientos-text");
    const arrow = title.querySelector(".arrow");

    if (title && content && arrow) {
        // Asegura que la sección esté oculta y la flecha hacia abajo al cargar la página
        content.classList.remove("active");
        arrow.classList.remove("rotated");

        title.addEventListener("click", () => {
            // Alterna la clase 'active'
            content.classList.toggle("active");
            arrow.classList.toggle("rotated", content.classList.contains("active"));

            // *** Nueva lógica para el max-height dinámico ***
            if (content.classList.contains("active")) {
                // Si la sección se está abriendo:
                // Temporalmente, establece max-height a 'none' o un valor muy grande
                // para que podamos medir su altura real.
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                // Si la sección se está cerrando:
                // Primero, establece la altura actual para que la transición funcione
                content.style.maxHeight = content.scrollHeight + "px";
                // Luego, con un pequeño retardo (para que la transición empiece desde la altura actual),
                // establece max-height a 0.
                setTimeout(() => {
                    content.style.maxHeight = "0";
                }, 10); // Un pequeño retardo, puedes ajustar si es necesario
            }
            // *** Fin de la nueva lógica ***
        });
    }

    // Tu código existente para el menú de navegación (sin cambios)
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("ul-nav");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
            const expanded = menu.classList.contains("active");
            toggle.setAttribute("aria-expanded", expanded);
        });
    }
});


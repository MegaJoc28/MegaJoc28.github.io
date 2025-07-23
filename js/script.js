    // Tu código existente para el menú de navegación (sin cambios)
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("ul-nav");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
            const expanded = menu.classList.contains("active");
            toggle.setAttribute("aria-expanded", expanded);
        });
    };


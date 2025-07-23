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

const btnScrollTop = document.getElementById('btn-scroll-top');
const footer = document.getElementById('footer');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const footerTop = footer.getBoundingClientRect().top + scrollY;

    if (scrollY > 200) {
        btnScrollTop.classList.add('show');
    } else {
        btnScrollTop.classList.remove('show');
    }

    const distanceToFooter = footerTop - (scrollY + windowHeight);

    if (distanceToFooter < 60) {
        btnScrollTop.style.bottom = (60 - distanceToFooter) + 'px';
    } else {
        btnScrollTop.style.bottom = '30px';
    }
});

btnScrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

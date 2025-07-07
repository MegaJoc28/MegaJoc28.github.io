
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("conocimientos-title");
  const content = document.getElementById("conocimientos-text");
  const arrow = title.querySelector(".arrow");

  title.addEventListener("click", () => {
    const isActive = content.classList.toggle("active");
    arrow.classList.toggle("rotated", isActive);
  });

  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("ul-nav");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    const expanded = menu.classList.contains("active");
    toggle.setAttribute("aria-expanded", expanded);
  });
});


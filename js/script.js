
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("conocimientos-title");
  const content = document.getElementById("conocimientos-text");
  const arrow = title.querySelector(".arrow");

  if (title && content && arrow) {
    title.addEventListener("click", () => {
      const isHidden = content.classList.toggle("hidden");
      arrow.classList.toggle("rotated", !isHidden);
    });
  }
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


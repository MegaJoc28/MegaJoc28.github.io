
  document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("conocimientos-title");
    const content = document.getElementById("conocimientos-text");
    const arrow = title.querySelector(".arrow");

    title.addEventListener("click", function () {
      const isActive = content.classList.toggle("active");
      arrow.classList.toggle("rotated", isActive);
    });
  });


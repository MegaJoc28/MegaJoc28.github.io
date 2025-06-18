
document.getElementById("conocimientos-title").addEventListener("click", function() {
      const texto = document.getElementById("conocimientos-text");
      if (texto.style.display === "block") {
        texto.style.display = "none";
      } else {
        texto.style.display = "block";
      }
    });
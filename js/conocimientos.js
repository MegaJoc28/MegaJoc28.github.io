
import { frontendSkills, backendSkills, otherSkills } from "./habilidades.js";

function crearHabilidadHTML(skill) {
  if (!skill.nombre) {
    console.warn("Habilidad sin nombre detectada y omitida:", skill); // Opcional: para depuración
    return null; // Retorna null para indicar que no se debe crear el elemento
  };;

  const div = document.createElement("div");
  div.classList.add("conocimiento");

  div.innerHTML = `
    <img class="conocimientos-img" src="${skill.imagen}" alt="${skill.nombre}">
    <p class="conocimientos-img__text"><span class="bold">${skill.nombre}</span> - Nivel: ${skill.estrellas} ⭐</p>`;
  return div;
}

function renderizarSkills(skills, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  skills.forEach(skill => {
    try {
      const skillHTML = crearHabilidadHTML(skill);
      if (skillHTML) { // Solo si skillHTML no es null (es decir, si la habilidad tenía nombre)
        contenedor.appendChild(skillHTML);
      }
    } catch (error) {
      console.log(`Error al cargar habilidad:`, error);
    }
  });
}

renderizarSkills(frontendSkills, "frontend");
renderizarSkills(backendSkills, "backend");
renderizarSkills(otherSkills, "other");

import { frontendSkills, backendSkills, otherSkills } from "./habilidades.js";

function crearHabilidadHTML(skill) {
  const div = document.createElement("div");
  div.classList.add("conocimiento");

  div.innerHTML = `
    <img class="conocimientos-img" src="${skill.imagen}" alt="${skill.nombre}">
    <p class="conocimientos-img__text"><span class="bold">${skill.nombre}</span> - Nivel: ${skill.estrellas} ⭐</p>
  `;

  return div;
}

function renderizarSkills(skills, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  skills.forEach(skill => {
    try {
      const skillHTML = crearHabilidadHTML(skill);
      contenedor.appendChild(skillHTML);
    } catch (error) {
      console.log(`Error al cargar:`, error);
    }
  });
}

renderizarSkills(frontendSkills, "frontend");
renderizarSkills(backendSkills, "backend");
renderizarSkills(otherSkills, "other");
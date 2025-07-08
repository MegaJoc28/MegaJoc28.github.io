
import { frontendSkills, backendSkills, otherSkills } from "./habilidades.js";

function crearHabilidadHTML(skill) {
  if (!skill.nombre || skill.imagen || skill.estrellas) {
    throw new Error("Error al cargar la data.")
  };;

  const div = document.createElement("div");
  div.classList.add("conocimiento");

  div.innerHTML = `
    <img class="conocimientos-img" src="${skill.imagen}" alt="${skill.nombre}">
    <p class="conocimientos-img__text"><span class="bold">${skill.nombre}</span> - Nivel: ${skill.estrellas} ⭐</p>`;
  return div;
}

function renderizarSkills(skills, contenedorId) {
  const contenedor = document.querySelector(`#${contenedorId} .skills-list`);
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
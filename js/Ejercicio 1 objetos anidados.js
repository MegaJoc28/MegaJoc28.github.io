

function mostrarConocimientos(alumnos) {
  alumnos.forEach(alumno => {
    console.log(`El alumno ${alumno.nombre} de ${alumno.edad} años, tiene este nivel de conocimiento en:`);
    for (let [lenguaje, nivel] of Object.entries(alumno.conocimientos)) {
      console.log(`- ${lenguaje.toUpperCase()}: ${nivel}`);
    }
    console.log(""); // Línea en blanco para separar alumnos
  });
}

let alumnos = [{
  nombre: "Rodrigo",
  edad: 31,
  conocimientos: {
    html: 4,
    css: 4,
    js: 3
  },
},
{
  nombre: "Jose",
  edad: 31,
  conocimientos: {
    html: 3,
    css: 2,
    js: 2
  },
},
{
  nombre: "Aldo",
  edad: 32,
  conocimientos: {
    html: 2,
    css: 1,
    js: 1
  }
}]

mostrarConocimientos(alumnos);

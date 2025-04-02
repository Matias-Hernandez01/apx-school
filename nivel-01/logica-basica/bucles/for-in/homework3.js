const usuarios = [
  { nombre: "Juan", habilidades: ["javascript", "react"] },
  { nombre: "María", habilidades: ["typescript", "react", "next.js"] },
  { nombre: "Lucas", habilidades: [] },
  { nombre: "Ana", habilidades: ["inglés", "javascript"] },
  { nombre: "Sofía", habilidades: ["typescript", "react"] },
  { nombre: "Martín", habilidades: ["react", "next.js"] },
  { nombre: "Julián", habilidades: ["javascript", "typescript"] },
  { nombre: "Lucía", habilidades: ["inglés", "react"] },
  { nombre: "Ezequiel", habilidades: ["typescript", "react"] },
];

const aviso = {
  compania: "TechFlow",
  texto:
    "Buscamos desarrolladores para unirse a nuestra startup de tecnología innovadora.",
  requisitos: ["typescript", "react"],
};

const candidatos = [];
let cumpleTodosLosRequisitos = false;


for (const usuario of usuarios) {
  cumpleTodosLosRequisitos = true; // Reinicia en cada usuario
  
  for (const requisito of aviso.requisitos) {
    let tieneHabilidad = false; // Reinicia para cada requisito

    for(const habilidad of usuario.habilidades){
      if(requisito === habilidad){
        tieneHabilidad = true;
        break; //Una vez que encuentra la habilidad, sale del bucle de habilidades.
      }
    }
    
    if (!tieneHabilidad) {
      cumpleTodosLosRequisitos = false;
    }
  }
  if(cumpleTodosLosRequisitos){
    candidatos.push(usuario)
  }
  
  
  
}



console.log("Los usuarios que cumplen los requisitos son: ", candidatos);
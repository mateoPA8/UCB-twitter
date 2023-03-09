
const formPublicacion = document.querySelector("#publicacion-form");
const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const divPublicaciones = document.querySelector("#publicacion-div");


const objPublicacion = {
  fecha: "",
  titulo: "",
  texto: "",
};
let listaPublicaciones = [];

function crearPublicacion() {
    listaPublicaciones.push({ ...objPublicacion });
    mostrarPublicaciones();
    formPublicacion.reset();
    limpiarObjeto();
 }

formPublicacion.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
 e.preventDefault();
 objPublicacion.titulo = tituloInput.value;
 objPublicacion.descripcion = descripcionInput.value;
 crearPublicacion();
}


function mostrarPublicaciones() {
  refrescarHTML();
  const divPublicaciones = document.querySelector("#publicacion-div");
  listaPublicaciones.forEach((publicacion) => {
    const { titulo, descripcion } = publicacion;
    const parrafo = document.createElement("p");
    parrafo.textContent = `${titulo} - ${descripcion} `;
    const hr = document.createElement("hr");
    divPublicaciones.appendChild(parrafo);
    divPublicaciones.appendChild(hr);
    console.log();
  });
}

function limpiarObjeto() {
  objPublicacion.titulo = "";
  objPublicacion.descripcion = "";
}
function refrescarHTML() {
  const divPublicaciones= document.querySelector("#publicacion-div");
  while (divPublicaciones.firstChild) 
  {
    divPublicaciones.removeChild(divPublicaciones.firstChild);
  }
}
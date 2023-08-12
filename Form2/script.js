// Obtener los valores de los campos
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("formulario");
const parrafo = document.getElementById("formulario__errores");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errores = "";
  let entrar = false;
  let nombrePatron = /^[a-zA-Z\s]+$/;
  let telefonoPatron = /^\d+$/;
  let emailPatron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  parrafo.innerHTML = "";

  if (!nombrePatron.test(nombre.value)) {
    errores += `El nombre no es válido. <br>`;
    entrar = true;
  }

  // Valida el campo email
  if (!emailPatron.test(email.value)) {
    errores += `El correo electrónico no es válido. <br>`;
    entrar = true;
  }

  // Valida el campo telefono
  if (!telefonoPatron.test(telefono.value)) {
    errores += `El número de teléfono no es válido. Por favor, 
                ingrese solo números sin espacios ni caracteres especiales. <br>`;
    entrar = true;
  }

  // Valida el campo mensaje
  if (mensaje.length > 200) {
    errores += `El mensaje ingresado es muy largo. <br>`;
    entrar = true;
  }

  if(entrar){
    parrafo.innerHTML = errores;
  }else{
    parrafo.innerHTML = "Formulario enviado!"
  }
});
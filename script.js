const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	nombre: /^[a-zA-Z\s]+$/, // Letras y espacios, pueden llevar acentos.
	email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	email: false,
	telefono: false
}

function validarFormulario(evento) {
  switch (evento.target.name) {
      case "nombre":
          validarCampo(expresiones.nombre, evento.target, 'nombre');
          break;
      case "email":
          validarCampo(expresiones.email, evento.target, 'email');
          break;
      case "telefono":
          validarCampo(expresiones.telefono, evento.target, 'telefono');
          break;
  }
}


function validarCampo(expresion, input, campo) {
  if (expresion.test(input.value)) {
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
      campos[campo] = true;
  } else {
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
      campos[campo] = false;
  }
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	
	if(campos.nombre && campos.email && campos.telefono){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
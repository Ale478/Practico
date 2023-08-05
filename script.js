
function validarForm(){ // Retorna True o False

    // Obtener los valores de los campos
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;

    // Definimos patrones con expresiones regulares 
    let nombrePatron = /^[a-zA-Z\s]+$/;
    let telefonoPatron = /^\d+$/;
    let emailPatron = /^[^\s@]+@ [^\s@]+\.[^\s@]+$/;

    let enviar = true;

    // Valida el campo nombre
    if(!nombrePatron.test(nombre)){
        alert("El nombre no es válido. Por favor, ingrese un nombre válido que contenga solo letras y espacios.");
        enviar = false;
    }

    // Valida el campo email
    if(!emailPatron.test(email)){
        alert("El correo electrónico no es válido. Por favor, ingrese una dirección de correo válida.");
        enviar = false;
    }

    // Valida el campo telefono
    if(!telefonoPatron.test(telefono)){
        alert("El número de teléfono no es válido. Por favor, ingrese solo números sin espacios ni caracteres especiales.");
        enviar = false;
    }
    
    return enviar;
    
}
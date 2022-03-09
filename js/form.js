// validacion del formulario

// form.addEventListener('submit', enviarFormulario);

// function enviarFormulario(e) {
//     e.preventDefault();
//     if (validarFormulario()) {
//         console.log('formulario correcto');
//         let formData = new FormData(form);

//         $.post("form.php", JSON.stringify(formData), function (respuesta, estado) {
//             console.log(respuesta);
//             console.log(estado);
//             if(estado == "success"){
//                 console.log('formulario enviado a php correctamente');
//             }
//         });
//     }
// }


function validarFormulario() {
    nameError.innerHTML = ""
    emailError.innerHTML = ""
    mensajeError.innerHTML = ""

    // reset de estilos de errores
    if (nameForm.classList.contains('invalid') == true) {
        nameForm.classList.remove('invalid');
    }
    if (email.classList.contains('invalid') == true) {
        email.classList.remove('invalid');
    }
    if (mensaje.classList.contains('invalid') == true) {
        mensaje.classList.remove('invalid');
    }

    // si el formulario tiene algun error, ingresamos a verificar cual es
    if (nameForm.validity.valueMissing || nameForm.validity.tooShort || email.validity.valueMissing || email.validity.typeMismatch || email.validity.tooShort || mensaje.validity.valueMissing || mensaje.validity.tooShort) {

        console.log('ingresamos al if de errores');


        // si tienen un error, ingresamos la clase invalida y el mensaje del error
        // validacion campo nombre
        if (nameForm.validity.valueMissing) {
            nameForm.classList.add('invalid');
            nameError.innerHTML = `No has completado este campo`;
        } else if (nameForm.validity.tooShort) {
            nameForm.classList.add('invalid');
            nameError.innerHTML = `El nombre ingresado debe tener al menos 4 caracteres, y has introducido ${nameForm.value.length}.`;
        }

        // validacion campo email
        if (email.validity.valueMissing) {
            email.classList.add('invalid');
            emailError.innerHTML = `Campo incompleto`;
        } else if (email.validity.typeMismatch) {
            email.classList.add('invalid');
            emailError.innerHTML = `El valor ingresado debe ser una direccion de correo electronico`;
        } else if (email.validity.tooShort) {
            email.classList.add('invalid');
            emailError.innerHTML = `El correo electrónico debe tener al menos 14 caracteres, y has introducido ${email.value.length}.`;
        }

        // validacion campo mensaje
        if (mensaje.validity.valueMissing) {
            mensaje.classList.add('invalid');
            mensajeError.innerHTML = `No has completado este campo`;
        } else if (mensaje.validity.tooShort) {
            mensaje.classList.add('invalid');
            mensajeError.innerHTML = `El mensaje introducido debe tener al menos 5 caracteres, y has introducido ${mensaje.value.length}.`;
        }
        return false;

    } else {
        return true
    }

}
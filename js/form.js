// validacion del formulario

form.addEventListener('submit', enviarFormulario);

function enviarFormulario(e) {
    e.preventDefault();
    if (validarFormulario()) {
        console.log('formulario correcto');
        let formData = new FormData(form);

        $.post("form.php", JSON.stringify(formData), function (respuesta, estado) {
            console.log(respuesta);
            console.log(estado);
            if(estado == "success"){
                console.log('formulario enviado a php correctamente');
            }
        });
    }
}


function validarFormulario() {
    $('.error').html('');

   

    // si alguno de los input tiene la clase invalid se la quitamos
    if ($('#form__name').hasClass('invalid') == true) {
        $('#form__name').removeClass('invalid');
    }
    if ($('#form__email').hasClass('invalid') == true) {
        $('#form__email').removeClass('invalid');
    }
    if ($('#form__mensaje').hasClass('invalid') == true) {
        $('#form__mensaje').removeClass('invalid');
    }

    // si el formulario tiene algun error, ingresamos a verificar cual es
    if (name.validity.valueMissing || name.validity.tooShort || email.validity.valueMissing || email.validity.typeMismatch || email.validity.tooShort || mensaje.validity.valueMissing || mensaje.validity.tooShort) {

        console.log('ingresamos al if de errores');


        // si tienen un error, ingresamos la clase invalida y el mensaje del error
        // validacion campo nombre
        if (name.validity.valueMissing) {
            name.classList.add('invalid');
            nameError.innerHTML = `No has completado este campo`;
        } else if (name.validity.tooShort) {
            name.classList.add('invalid');
            nameError.innerHTML = `El nombre ingresado debe tener al menos 4 caracteres, y has introducido ${name.value.length}.`;
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
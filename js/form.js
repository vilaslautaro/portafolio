form.addEventListener('submit', enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault();
    if (validarFormulario()) {
        form.reset();
        let fecha = `${String(new Date().getDate())}/${String(new Date().getMonth() + 1)}/${new Date().getFullYear()}`;
        const datosEmail = {
            Fecha: fecha,
            Nombre: nameForm.value,
            Email: email.value,
            Mensaje: mensaje.value
        };
        // ad(collections(db, 'emails'), datosEmail)
        //     .then(() => {
        //         console.log(datosEmail);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }
}

function limpiarErroresFormulario() {
    nameError.innerHTML = ""
    emailError.innerHTML = ""
    mensajeError.innerHTML = ""

    if (nameForm.classList.contains('invalid') == true) {
        nameForm.classList.remove('invalid');
    }
    if (email.classList.contains('invalid') == true) {
        email.classList.remove('invalid');
    }
    if (mensaje.classList.contains('invalid') == true) {
        mensaje.classList.remove('invalid');
    }
}

function validarFormulario() {
    limpiarErroresFormulario()

    // si el formulario tiene algun error, ingresamos a verificar cual es
    if (nameForm.validity.valueMissing || nameForm.validity.tooShort || email.validity.valueMissing || email.validity.typeMismatch || email.validity.tooShort || mensaje.validity.valueMissing || mensaje.validity.tooShort) {

        if (nameForm.validity.valueMissing) {
            nameForm.classList.add('invalid');
            nameError.innerHTML = `No has completado este campo`;
        } else if (nameForm.validity.tooShort) {
            nameForm.classList.add('invalid');
            nameError.innerHTML = `El nombre ingresado debe tener al menos 4 caracteres, y has introducido ${nameForm.value.length}.`;
        }

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
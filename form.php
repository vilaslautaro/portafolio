<?php

$nombre = $_POST['nombre'];
$email = $_POST['correo'];
$mensaje = $_POST['mensaje'];

echo json_encode(
    array(
        'nombre:' .$nombre,
        'email:'  .$email,
        'mensaje:' .$mensaje
    )
);


// let data = {
//     'name': document.getElementById('form__name').value,
//     'email': document.getElementById('form__email').value,
//     'mensaje': document.getElementById('form__mensaje').value,
// };
// guardadoDataFormulario(data); // Enviamos la información obtenida por el usuario a la función que se encargara de guardar la información en Firebase
// form.reset();
// }
// }

// function guardadoDataFormulario(data) {
// firebase.database().ref('contact').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
// .then(function () {
//     alert('mensaje guardado'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
// })
// .catch(function () {
//     alert('mensaje No guardado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
// });
// }
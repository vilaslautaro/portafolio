<?php

$nombre = $_POST['nombre'];
$email = $_POST['correo'];
$mensaje = $_POST['mensaje'];

echo json_encode(
    array(
          'Nombre: ' => $nombre,
          'email: ' => $email,
          'mensaje: ' => $mensaje
     )
    );
?>

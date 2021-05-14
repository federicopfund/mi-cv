<?php
// llamado de campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

//datos para correo
$destinatario = "su correo@gmail.com";
$asunto = "contacto desde nuestra Web";
$carta = "De: $nombre \n";
$carta .="Correo: $correo \n";
//$carta .="Telefono: "$Telefono \n";
$carta .= "Mensaje: $mensaje";

// Enviando mensaje

mail($destinatario,$asunto,$carta);
header('Location:mensaje-de-envio.html')
?>
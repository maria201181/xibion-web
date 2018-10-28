<?php
if( isset($_POST) ){
     
     
    //sumbission data
    $ipaddress = $_SERVER['REMOTE_ADDR'];
    $date = date('d/m/Y');
    $time = date('H:i:s');
     
    //form data
    $email = $_POST['email'];
    //form validation to go here....
     
    $headers = "From: newsletter@xibion.com" . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
     
    $emailbody = "
                  <p><strong>Se ha registrado: </strong> {$email} </p>
                  <p>El registro fue hecho desde la IP: {$ipaddress} a las {$time} el dia {$date}</p>;
     
    mail("daniel.vicente.741@gmail.com","Nuevo Registro Newsletter",$emailbody,$headers);
}
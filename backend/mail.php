<?php

require_once('./mailClass.php');       // to run functions from "model/mailCLass.php"

$mail = new Mail($_POST["pack"], $_POST["name"], $_POST["mail"], $_POST["phone"], $_POST["message"]);
$mail->sendMail($mail->getPack(), $mail->getName(), $mail->getMail(), $mail->getPhone(), $mail->getMessage());

header('location: index.html');     // Go to page "view/contact.php"
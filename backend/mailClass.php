<?php

class Mail
{
    private $pack;
    private $name;
    private $mail;
    private $phone;
    private $message;

    function __construct($pack, $name, $mail, $phone, $message)
    {
        $this->pack = $pack;
        $this->name = $name;
        $this->mail = $mail;
        $this->phone = $phone;
        $this->message = $message;
    }
 
    public function getPack()
    {
        return $this->pack;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getMail()
    {
        return $this->mail;
    }

    public function getPhone()
    {
        return $this->phone;
    }

    public function getMessage()
    {
        return $this->message;
    }

    public function sendMail($pack, $name, $mail, $phone, $message)
    {

        $mail = [
            "pack"  => htmlspecialchars($pack, ENT_QUOTES, 'UTF-8'),
            "name" => htmlspecialchars($name, ENT_QUOTES, 'UTF-8'),      // ucfirst : capitalize the first letter
            "mail"    => htmlspecialchars(strtolower($mail), ENT_QUOTES, 'UTF-8'),             // strtolower : lowercase all letters
            "phone"    => htmlspecialchars($phone, ENT_NOQUOTES),                                     // htmlspecialchars : remove html tags
            "message"   => htmlspecialchars($message, ENT_NOQUOTES),
        ];

        $header = "MIME-Version: 1.0\r\n";
        $header .= 'From:"' . utf8_decode(utf8_encode($mail["name"])) . '"<' . $mail["mail"] . '>' . "\n";
        $header .= 'Content-Type:text/html; charset="uft-8"' . "\n";
        $header .= 'Content-Transfer-Encoding: 8bit';

        $mailText = '
                    <div align="left">
                        nom : '. $mail["name"] . ' tel : ' . $mail["phone"] . '
                        <br />
                        ' . nl2br($mail["message"]) . '
                        <br />
                    </div>
                    <div align="center">
                        <u>Envoyé depuis kubewebagence.com</u>
                    </div>
            ';  // nl2br : take line breaks into account

        mail("gb@kubewebagence.com", "Demande de contact pack " . $mail["pack"], $mailText, $header);
    }
}

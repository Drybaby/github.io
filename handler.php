<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$bestellnumber = $_POST['bestellnumber'];
$formcontent="From: $name \n XML_11_2_ $bestellnumber \n Message: $message";
$recipient = "s.trolmes@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // E-mail modtager og emne
    $to = "your-email@gmail.com";
    $subject = "Ny besked fra kontaktsiden";

    // E-mail body
    $body = "Navn: $name\nE-mail: $email\n\nBesked:\n$message";

    // E-mail header
    $headers = "From: $email";

    // Send e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Besked sendt!";
    } else {
        echo "Besked kunne ikke sendes.";
    }
}
?>
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'shahad1nazar@gmail.com'; // Din Gmail
        $mail->Password = '9101051325';    // Gmail app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Modtager og afsender
        $mail->setFrom($email, $name);
        $mail->addAddress('shahad1nazar@gmail.com');

        // Indhold
        $mail->isHTML(false);
        $mail->Subject = 'Ny besked fra kontaktsiden';
        $mail->Body    = "Navn: $name\nE-mail: $email\n\nBesked:\n$message";

        $mail->send();
        echo 'Besked sendt!';
    } catch (Exception $e) {
        echo "Besked kunne ikke sendes. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>


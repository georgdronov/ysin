<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (!empty($_POST['name']) && !empty($_POST['phone']) && !empty($_POST['email'])) {
    $mail = new PHPMailer(true);

    try {
        // Настройки сервера
        $mail->isSMTP();
        $mail->Host = 'smtp.mail.ru';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@ysinru.com'; // логин от вашей почты
        $mail->Password = 'GyMkfmMzecKfxLFCsicP'; // пароль от почтового ящика
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Настройки письма
        $mail->CharSet = 'UTF-8';
        $mail->setFrom('info@ysinru.com', 'Георгий'); // адрес почты и имя отправителя
        $mail->addAddress('info@ysinru.com', 'Получатель'); // адрес получателя и имя

        // Содержание письма
        $mail->isHTML(true);
        $mail->Subject = 'Сообщение с сайта';
        $mail->Body = "Имя: {$_POST['name']}<br>Телефон: {$_POST['phone']}<br>Email: {$_POST['email']}";
        $mail->AltBody = "Имя: {$_POST['name']}\r\nТелефон: {$_POST['phone']}\r\nEmail: {$_POST['email']}";

        // Отправка
        if ($mail->send()) {
            echo 'Письмо успешно отправлено!';
        } else {
            echo 'Письмо не может быть отправлено. Ошибка: ' . $mail->ErrorInfo;
        }
    } catch (Exception $e) {
        echo "Сообщение не может быть отправлено. Ошибка: {$mail->ErrorInfo}";
    }
} else {
    echo 'Заполните все поля формы.';
}
?>

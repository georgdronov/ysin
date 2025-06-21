<?php
$to = 'info@ysinru.com';
$subject = 'Тестовое письмо';
$message = 'Это тестовое письмо для проверки функции mail().';
$headers = 'From: test@example.com' . "\r\n" .
           'Reply-To: test@example.com' . "\r\n" .
           'Content-Type: text/plain; charset=UTF-8\r\n';

if (mail($to, $subject, $message, $headers)) {
    echo 'Письмо успешно отправлено';
} else {
    echo 'Ошибка при отправке письма';
    error_log("Ошибка при отправке тестового письма");
}
?>

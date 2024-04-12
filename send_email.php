<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    
    // Email на который нужно отправить письмо
    $to = 'info@ysinru.com';
    
    // Тема письма
    $subject = 'Новая заявка с лендинга';
    
    // Тело письма
    $message = "Имя: $name\n\n";
    $message .= "Телефон: $phone\n\n";
    $message .= "Email: $email\n\n";
    
    // Дополнительные заголовки
    $headers = "From: $name <$email>\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n"; // Указываем кодировку UTF-8
    
    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "Ваша заявка успешно отправлена!";
    } else {
        echo "Что-то пошло не так. Пожалуйста, попробуйте еще раз.";
    }
}
?>

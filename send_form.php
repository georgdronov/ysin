<?php
// Проверяем, была ли отправлена форма
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    
    // Формируем тело письма
    $message = "Имя: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Email: $email\n";
    
    // Отправляем письмо
    $to = "dronovgeorg72@gmail.com";
    $subject = "Новая заявка с сайта";
    $headers = "From: $email";
    
    // Пытаемся отправить письмо
    if (mail($to, $subject, $message, $headers)) {
        // Если письмо успешно отправлено, выводим сообщение
        echo "Письмо успешно отправлено!";
    } else {
        // Если письмо не отправлено, выводим сообщение об ошибке
        echo "Ошибка при отправке письма. Пожалуйста, попробуйте позже.";
    }
} else {
    // Если форма не отправлена, перенаправляем пользователя обратно на страницу с формой
    header("Location: index.html");
    exit;
}
?>

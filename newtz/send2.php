<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST['name'])) {$name = $_POST['name'];}
	if (isset($_POST['email'])) {$email = $_POST['email'];}
	if (isset($_POST['theme'])) {$theme = $_POST['theme'];}
	if (isset($_POST['note'])) {$note = $_POST['note'];}
	$to = "example-mail@gmail.com";
	$subject = "Оформление заказа";
	$headers = "Content-type: text/html; charset=utf-8 \r\n";
	$message = "<p><strong>Имя:</strong> $name</p>
	<p><strong>Email:</strong> $email</p>
	<p><strong>Заголовок:</strong> $theme</p>
	<p><strong>Сообщение:</strong> $note</p>";
	mail($to, $subject, $message, $headers);
}
?>
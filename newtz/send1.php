<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST['name'])) {$name = $_POST['name'];}
	if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
	$to = "example-mail@gmail.com";
	$subject = "Заказ звонка";
	$headers = "Content-type: text/html; charset=utf-8 \r\n";
	$message = "<p><strong>Имя:</strong> $name</p>
	<p><strong>Телефон:</strong> $phone</p>";
	mail($to, $subject, $message, $headers);
}
?>
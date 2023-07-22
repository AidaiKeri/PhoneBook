<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "PhoneBookDb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения к БД: " . $conn->connect_error);
}

$id = $_POST["id"];
$name = $_POST["name"];
$phone = $_POST["phone"];
$by_whom = $_POST["by_whom"];

$sql = "UPDATE phonebook SET name = '$name', phone = '$phone', by_whom = '$by_whom' WHERE id = $id";
$conn->query($sql);

$conn->close();
?>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "PhoneBookDb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения к БД: " . $conn->connect_error);
}

$id = $_GET["id"];

$sql = "DELETE FROM phonebook WHERE id = $id";
$conn->query($sql);

$conn->close();
?>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "PhoneBookDb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения к БД: " . $conn->connect_error);
}

$name = $_POST["name"];
$phone = $_POST["phone"];
$by_whom = $_POST["by_whom"];

$sql = "INSERT INTO phonebook (name, phone, by_whom) VALUES ('$name', '$phone', '$by_whom')";
$conn->query($sql);

$conn->close();
?>

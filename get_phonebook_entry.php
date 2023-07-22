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

$sql = "SELECT * FROM phonebook WHERE id = $id";
$result = $conn->query($sql);

$entry = null;
if ($result->num_rows > 0) {
    $entry = $result->fetch_assoc();
}

$conn->close();

header("Content-Type: application/json");
echo json_encode($entry);
?>

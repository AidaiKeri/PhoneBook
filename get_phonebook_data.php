<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "PhoneBookDb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения к БД: " . $conn->connect_error);
}

$sql = "SELECT * FROM phonebook";
$result = $conn->query($sql);

$phonebookData = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $phonebookData[] = $row;
    }
}

$conn->close();

header("Content-Type: application/json");
echo json_encode($phonebookData);
?>

<?php
require_once 'config/connect.php';
?>

<!DOCTYPE html>
<html>
<head>
    <title>Телефонный справочник</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Телефонный справочник</h1>
        <button id="addButton">Добавить</button>
        <table>
            <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Телефон</th>
                    <th>Кем приходится</th>
                    <th>Кнопки действий</th>
                </tr>
            </thead>
            <tbody id="phonebookData">
            </tbody>
        </table>
    </div>

    <div id="dialog" class="container">
    </div>

    <script src="scripts.js"></script>
</body>
</html>


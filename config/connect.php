<?php
$connect = mysqli_connect('localhost', 'root', '', 'PhoneBookDb');
if(!$connect) {
    die('Ошибка подключения к БД');
}
<?php
function whoami() {
    if (isset($_POST["name"]) && isset($_POST["age"])) {
        return "Hi, my name is " . $_POST["name"] . " and I'm " . (int)$_POST["age"] . " years old." . PHP_EOL;
    } else if (isset($_POST['name']) && !isset($_POST['age'])) {
        return "Hi, my name is " . $_POST['name'] . "." . PHP_EOL;
    } else if (!isset($_POST['name']) && isset($_POST['age'])) {
        return "Hi, I have no name and I'm " . (int)$_POST['age'] . " years old." . PHP_EOL;
    } else {
        return "Hi, I have no name.";
    }
}
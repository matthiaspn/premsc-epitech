<?php
function formateCurriculum(string $curriculum): string {
    $ret = "I'm a student of ";

    switch ($curriculum) {
        case "pge":
            return $ret . "PGE (Programme Grande Ecole).";
        case "msc":
            return $ret . "MSc Pro.";
        case "coding":
            return $ret . "Coding Academy.";
        case "wac":
            return $ret . "Web@cademie.";
        default:
            return "";
    }
}

function form_is_submitted(): bool {
    return isset($_POST['submit']);
}

function whoami() {
    $ret = "";
    if ($_POST["name"] != "" && $_POST["age"] != "") {
        $ret = "Hi, my name is " . $_POST["name"] . " and I'm " . (int)$_POST["age"] . " years old." . PHP_EOL;
    } else if ($_POST["name"] != "" && $_POST["age"] == "") {
        $ret = "Hi, my name is " . $_POST['name'] . "." . PHP_EOL;
    } else if ($_POST["name"] == "" && $_POST["age"] != "") {
        $ret = "Hi, I have no name and I'm " . (int)$_POST['age'] . " years old." . PHP_EOL;
    } else {
        $ret = "Hi, I have no name." . PHP_EOL;
    }

    if (isset($_POST['submit']))
        $ret .= formateCurriculum($_POST['curriculum']);
    echo $ret;
}
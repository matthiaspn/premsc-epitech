<?php
function formateCurriculum(string $curriculum): string {
    $ret = " I'm a student of ";

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
    if (isset($_POST['submit'])) {
        $ret = "";
        if (!empty($_POST["name"]) && !empty($_POST["age"])) {
            $ret = "Hi, my name is " . $_POST["name"] . " and I'm " . (int)$_POST["age"] . " years old.";
        } else if (!empty($_POST['name']) && empty($_POST['age'])) {
            $ret = "Hi, my name is " . $_POST['name'] . ".";
        } else if (empty($_POST['name']) && !empty($_POST['age'])) {
            $ret = "Hi, I have no name and I'm " . (int)$_POST['age'] . " years old.";
        } else {
            $ret = "Hi, I have no name.";
        }

        if (!empty($_POST['curriculum']))
            $ret .= formateCurriculum($_POST['curriculum']);
        echo $ret;
    }
}
<?php
function render_body(string $type) {
    if ($type != "home" && $type != "php" && $type != "sql")
        return "Unknown page";
    switch ($type) {
        case "home":
            return file_get_contents(__DIR__ . "/home.html");
        case "php":
            return file_get_contents(__DIR__ . "/php.html");
        case "sql":
            return file_get_contents(__DIR__ . "/sql.html");
    }
    return "Unknown page";
}
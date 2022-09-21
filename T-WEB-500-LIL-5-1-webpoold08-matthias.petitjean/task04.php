<?php declare(strict_types=1);
function calc(string $operator, int $nbr1, int $nbr2) {
    if ($operator != "+" && $operator != "-" && $operator != "*" && $operator != "/" && $operator != "%")
        return "Unknown operator";
    if ($operator == "/" && $nbr2 == 0)
        return "Cannot divide by 0";

    switch ($operator) {
        case "+":
            return $nbr1 + $nbr2;
        case "-":
            return $nbr1 - $nbr2;
        case "*":
            return $nbr1 * $nbr2;
        case "/":
            return $nbr1 / $nbr2;
        case "%":
            return $nbr1 % $nbr2;
    }
    return "Unknown operator";
}
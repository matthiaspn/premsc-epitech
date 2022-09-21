<?php declare(strict_types=1);
function get_shortest(array $strings)
{
    $array_temp = array_map('strlen', $strings);
    $index = array_search(min($array_temp), $array_temp);
    return $strings[$index];
}
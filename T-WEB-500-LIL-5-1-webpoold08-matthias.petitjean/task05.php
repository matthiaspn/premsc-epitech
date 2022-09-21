<?php declare(strict_types=1);
function calc_average(array $numbers) {
    return round(array_sum($numbers) / count($numbers), 1);
}
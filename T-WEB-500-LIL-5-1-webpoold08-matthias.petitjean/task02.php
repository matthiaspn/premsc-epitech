<?php declare(strict_types=1);
function dog_bark(int $woof_nb) {
    if ($woof_nb <= 0)
        echo "\n";
    else {
        echo str_repeat("woof ", $woof_nb - 1);
        echo "woof\n";
    }
}
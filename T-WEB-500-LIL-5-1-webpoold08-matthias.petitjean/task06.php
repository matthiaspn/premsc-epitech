<?php declare(strict_types=1);
function lookAndSay($string) {
    $returnString = "";
    $count = $string[0];
    $iterator = 1;
    $i = 1;
    while ($i < strlen($string)) {
        if ($string[$i] == $count) $iterator++;
        else {
            $returnString .= $iterator . $count;
            $count = $string[$i];
            $iterator = 1;
        }
        $i++;
    }
    return $returnString . $iterator . $count;
}

function sequence($n) {
    $testStr = "1";
    for ($i = 0; $i <= $n; $i++) {
        $testStr = lookAndSay($testStr);
        if ($i == 0) {
            $testStr = ltrim($testStr, '1');
            $testStr = "1";
        }
        echo $testStr . "\n";
    }
}
<?php
function somaDoisValores($a, $b) {
    return $a + $b;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $num1 = isset($_GET['num1']) ? (int)$_GET['num1'] : 0;
    $num2 = isset($_GET['num2']) ? (int)$_GET['num2'] : 0;
    
     echo somaDoisValores($num1, $num2);
}
?>
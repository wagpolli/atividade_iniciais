<?php
function swap($a, $b) {  
    
    $temp = $a;
    $a = $b;
    $b = $temp;
    echo ("Valores após a troca: A = {$a}, B = {$b}");
}
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $num1 = isset($_GET['numero1']) ? intval($_GET['numero1']) : 9;
    $num2 = isset($_GET['numero2']) ? intval($_GET['numero2']) : 8;
    swap($num1, $num2);
}
?>
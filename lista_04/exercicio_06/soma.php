<?php

class Soma {
    function areaRetangulo ($base, $altura) {
        return $base * $altura /2;
    }
}

// carrega as funcoes da class pra mim
$somaClass = new Soma();
// agora executa a minhaFuncao 
// de dentro da class
echo $somaClass->areaRetangulo($_GET['num1'], $_GET['num2']);
<?php

class Soma {
    function areaQuadrado( $base, $altura) {
        return $base * $altura;
    }
}

// carrega as funcoes da class pra mim
$somaClass = new Soma();
// agora executa a minhaFuncao 
// de dentro da class
echo $somaClass->areaQuadrado($_GET['num1'], $_GET['num2']);
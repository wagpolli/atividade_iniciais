<?php

class Soma {
    function areaCirculo($raio) {
        $pi = 3.14159;
        return $pi * $raio * $raio;
    }
}

// carrega as funcoes da class pra mim
$somaClass = new Soma();
// agora executa a minhaFuncao 
// de dentro da class
echo $somaClass->areaCirculo($_GET['num1'], $_GET['num2']);
<?php

class Soma {
   function ehBissexto($ano) {
        if (($ano % 4 == 0 && $ano % 100 != 0) || $ano % 400 == 0) {
            return 1; 
        } else {
            return 0; 
        }
    }
}

// carrega as funcoes da class pra mim
$somaClass = new Soma();
// agora executa a minhaFuncao 
// de dentro da class
echo $somaClass->areaQuadrado($_GET['num1'], $_GET['num2']);
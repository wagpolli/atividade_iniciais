<?php

class Soma {
    function ehPar($num) {
        if ($num % 2 == 0) {
            
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
echo $somaClass->ehPar($_GET['num1']);
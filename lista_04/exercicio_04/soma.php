<?php

class Soma {
    function buscaMaiorValor( $num1, $num2, $num3) {
        $maior = $num1; 
        
        if ($num2 > $maior) {
            $maior = $num2;
        }
        if ($num3 > $maior) {
            $maior = $num3;
        }
        
        return $maior;
    }
}
// carrega as funcoes da class pra mim
$somaClass = new Soma();
// agora executa a minhaFuncao 
// de dentro da class
echo $somaClass->buscaMaiorValor($_GET['valor1'], $_GET['valor2'],$_GET['valor3']);
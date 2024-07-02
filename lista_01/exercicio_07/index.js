function calcular() {
    
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var operacao = document.getElementById('operacao').value;
    var resultado = 0;

    
    switch (operacao) {
        case 'adicao':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Erro: divisão por zero';
            }
            break;
        default:
            resultado = 'Operação inválida';
    }

    
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

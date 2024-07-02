function verificarIdade() {
    
    var idade = document.getElementById('idadeInput').value;

    
    idade = parseInt(idade);

    
    if (idade >= 18) {
        document.getElementById('mensagem').textContent = 'Você é maior de idade.';
    } else {
        document.getElementById('mensagem').textContent = 'Você é menor de idade.';
    }
}

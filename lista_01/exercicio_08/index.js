function contarPalavras() {
    
    var texto = document.getElementById('texto').value.trim();

    if (texto === '') {
        alert('Por favor, insira um texto para contar as palavras.');
        return;
    }
    var palavras = texto.split(/\s+/);

    var numeroPalavras = palavras.length;

    document.getElementById('resultado').textContent = 'Número de palavras: ' + numeroPalavras;
}

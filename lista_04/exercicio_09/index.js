function verificarAno() {
    var ano = document.getElementById('ano').value;
    var resultadoDiv = document.getElementById('resultado');
    
    
    if (!ano) {
        resultadoDiv.innerHTML = 'Por favor, insira um ano.';
        return;
    }
    
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'bissexto.php?ano=' + encodeURIComponent(ano), true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            resultadoDiv.innerHTML = xhr.responseText;
        } else {
            resultadoDiv.innerHTML = 'Ocorreu um erro.';
        }
    };
    xhr.send();
}

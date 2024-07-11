let botao = document.getElementById('botao')
botao.addEventListener('click', function() {

    let valor1 = document.getElementById('valor1').value

    fetch('soma.php?num1='+valor1).then(function(resultado){
        return resultado.text();
    }).then(function (texto) {
        let mensagem = document.getElementById('mensagem')
        if (texto == 1) {
            mensagem.innerText = "par"
        } else {
            mensagem.innerText = "impar"
        }
    }).catch(function (erro) {
        console.error(erro)
    })

})
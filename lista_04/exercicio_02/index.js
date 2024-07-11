document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('trocarBtn').addEventListener('click', function() {
        var numero1 = document.getElementById('numero1').value;
        var numero2 = document.getElementById('numero2').value;

        fetch('soma.php?numero1='+numero1+'&numero2='+numero2).then(function(resultado){
            return resultado.text();
        }).then(function (texto) {
            let mensagemAntes = document.getElementById('resultadoAntes')
            mensagemAntes.innerText = "Valores antes da troca: A = " + numero1 + ", B = " + numero2

            let mensagem = document.getElementById('resultado')
            mensagem.innerText = texto
        }).catch(function (erro) {
            console.error(erro)
        })


    });
});
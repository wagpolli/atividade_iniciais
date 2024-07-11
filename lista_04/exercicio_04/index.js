
let botao = document.getElementById('botao')
botao.addEventListener('click', function() {

    let valor1 = document.getElementById('valor1').value
    let valor2 = document.getElementById('valor2').value
    let valor3 = document.getElementById('valor3').value

    fetch('soma.php?valor1='+valor1+'&valor2='+valor2+'&valor3='+valor3).then(function(resultado){
        return resultado.text();
    }).then(function (texto) {
        let mensagem = document.getElementById('mensagem')
        mensagem.innerText = "O maior valor é "+texto
    }).catch(function (erro) {
        console.error(erro)
    })

})
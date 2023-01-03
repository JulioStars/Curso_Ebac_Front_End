const form = document.getElementById('form-numerico');

form.addEventListener('submit', function(e) {
    
    const CampoA = document.getElementById('campoA');
    const CampoB = document.getElementById('campoB');

    const valorA = CampoA.value;
    const valorB = CampoB.value;
    const mensagemSucesso = `Validação com sucesso: ${valorB} é maior que ${valorA}`;
    const mensagemErro = `Erro na validação: ${valorB} é menor que ${valorA}`
    

    if (valorB < valorA) {
        alert(mensagemErro)
    } else {
        alert(mensagemSucesso)
    
    }
})


console.log(form)
function verificaChute(chute) {
    const numero = +chute;

    if (naoENumero(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido! Fale um número válido.</div>';
        return
    } 
    
    if (numMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido Fale um número entre: ${menorValor} e ${maiorValor}</div>`;
        return
    }
    
    if (chuteCerto(numero)) {
        document.body.innerHTML = `
        <h2>Você acertou, parabéns!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <div id="jogarNovamente" class="btn btn-primary botao">Recomeçar</div>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>` 
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }

    
}

function naoENumero(numero) {
    return Number.isNaN(numero);
}

function numMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteCerto(numero) {
    return numero === numeroSecreto;
}

const botao = document.querySelector('#jogarNovamente');

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogarNovamente') {
        location.reload()
    };
})
function verificaValor(chute) {
    const numero = +chute;

    if (Number.isNaN(numero)){
        elementoChute.innerHTML += "<div>Valor Inválido</div>";
    }

    if (numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `<div>Valor inválido: o Número está entre ${menorValor} e ${maiorValor}.</div>`;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML= `
        <h2>Acertou mizeravi</h2>
        <h3>O número secreto era: ${numeroSecreto}</h3>
        
        <button class="btn-jogar" id="jogar-novamente">Jogar Novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é Menor <i class="fa-solid fa-arrow-down"></i></div>`;
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é Maior <i class="fa-solid fa-arrow-up"></i></div>`;
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
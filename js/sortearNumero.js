const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumero() 


function gerarNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)
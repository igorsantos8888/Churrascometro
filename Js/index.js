/* 
* Carne - 400g por pessoa. + de 6h - 600
* Cerveja - 1200 ml por pesoa. + 6h - 2000 ml
* Refrigerante/água - 1000 ml po pessoa. + 6h 1500 ml
* crianças valem por 0,5
*/

let inputAdultos = document.getElementById('adultos')
let inputCrianca = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')
let resultado = document.getElementById('resultado')

function calcular() {
    console.log('Calculando...')

    let aduntos = inputAdultos.value
    let criancas = inputCrianca.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnePorPessoa(duracao) * aduntos + (carnePorPessoa(duracao) / 2 * criancas)
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * aduntos
    let qtdTotalBebidas = bebidasPorPessoa(duracao) * aduntos + (bebidasPorPessoa(duracao) / 2 * criancas)

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Pet's de 2l de Bebidas </p>`

}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}
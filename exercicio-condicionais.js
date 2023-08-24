const valorDoProduto = 110
const quantidadeDeParcelas = 8



if (quantidadeDeParcelas === 1) {
    const desconto = valorDoProduto * 10 / 100
    const valorAPagar = valorDoProduto - desconto
    console.log(` Você deve pagar R$ ${valorAPagar.toFixed(2)} pois a vista tem 10% de desconto`)
}
else if (quantidadeDeParcelas >= 2 && quantidadeDeParcelas <= 6) {
    const valorDaParcela = valorDoProduto / quantidadeDeParcelas
    console.log(` Você deve pagar em ${quantidadeDeParcelas} x sem juros de R$ ${valorDaParcela.toFixed(2)}`)
} else if (quantidadeDeParcelas >= 7 && quantidadeDeParcelas <= 12) {
    const valorApagarComJuros = valorDoProduto * (1 + 1 / 100) ** quantidadeDeParcelas
    const valorApagar = (valorApagarComJuros / quantidadeDeParcelas).toFixed(2)
    console.log(` Você deve pagar em ${quantidadeDeParcelas} x de R$ ${valorApagar} com juros.`)
} else {
    console.log("número de parcelas inválido")
}


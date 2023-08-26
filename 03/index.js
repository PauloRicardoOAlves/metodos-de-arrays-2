const palavras = ["arroz", "feijão", "carne", "macarrão", "vodka"]

function compras(lista) {
    const produtoProibido = lista.some((elemento) => elemento == 'cerveja' || elemento == 'vodka')
    if (produtoProibido) {
        console.log('revise sua lista, joão. possui bebida com venda proibida!')
    } else {
console.log('tudo certo, vamos as compras!')
    }
}

compras(palavras)
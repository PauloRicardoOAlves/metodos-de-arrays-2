const palavras = ["livro", "sol", "carro"]

function contarLetras(lista) {
    const palavraInvalida = lista.some((elemento) => elemento.length > 5)
    if (palavraInvalida) {
        return "array não validado"
    } else if (!palavraInvalida) {
        return "Array validado"
    }
}

console.log(contarLetras(palavras))

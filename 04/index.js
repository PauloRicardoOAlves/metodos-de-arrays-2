const numeros = [0, 122, 4, 6, 2, 8, 44]

function validarArray(array) {
    let validacao = array.every((numero) => numero % 2 == 0)
    if (validacao) {
        console.log('array válido')
    } else {
        console.log('array inválido')
    }
}

validarArray(numeros)
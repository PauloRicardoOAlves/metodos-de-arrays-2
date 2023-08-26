const enderecos = [
    { cep: 10111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
]

function buscarEndereco(cep, lista) {
let endereco = lista.find((numero) => numero == cep)
console.log(endereco)
}

buscarEndereco(75044, enderecos)
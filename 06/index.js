const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const cidadesSelecionadas = cidades.filter((cidade) => cidade.length <= 8)
cidadesFormatado = cidadesSelecionadas.join(', ')
console.log(cidadesFormatado)
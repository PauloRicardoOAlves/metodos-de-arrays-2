const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Guerra e Paz";

function posicao (nomeDoLivro){
    return livros.indexOf(nomeDoLivro) + 1
}

console.log(posicao(nomeDoLivro))
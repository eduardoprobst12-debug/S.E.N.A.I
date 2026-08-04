let filmes = [{titulo: 'Matrix', ano: 1999, genero: 'Ficção'}, {titulo: 'Interestelar', ano: 2014, genero: 'Ficção'}, {titulo: 'Titanic', ano: 1997, genero: 'Romance'}, {titulo: 'Avatar', ano: 2009, genero: 'Ficção'}, {titulo: 'Coringa', ano: 2019, genero: 'Drama'}]

//------------------------------------------------------------------------------------------------------

let nomes = filmes.map (function(item) {

    return item.titulo

})

console.log (nomes)

//------------------------------------------------------------------------------------------------------

let ficção = filmes.filter (function(item) {

    return item.filmes === "ficção"

})

console.log (filmes)

//------------------------------------------------------------------------------------------------------

let encontrado = filmes.find (function(item) {

    return item.ano === 1997

})

console.log (encontrado)

//------------------------------------------------------------------------------------------------------

//o mesmo problema da 14

//------------------------------------------------------------------------------------------------------
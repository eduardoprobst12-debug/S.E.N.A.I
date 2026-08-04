let contatos = [

    {id: 1, nome: "Eduardo"},
    {id: 2, nome: "Igor"},

]

let encontrado = contatos.find (function(Item) {

    return Item.id === 2

})

console.log (encontrado)
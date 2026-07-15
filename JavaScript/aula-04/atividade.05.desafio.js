let produtos = [
    {nome:"TV", preco: 1999.99, categoria: "Eletro"},
    {nome:"Geladeira", preco: 3900, categoria:"Branca"},
    {nome:"PS5", preco:3500, categoria:"Video Game"},
    {nome:"Varal", preco:300, categoria:"Casa"},
    {nome:"Forno", preco:590, categoria:"Branca"}
]

produtos.forEach(function(produto) {
    console.log(`Nome:${produto.nome} - preço:${produto.preco}`)
    total = total + produto.preco;
})

console.log(`valor total é ${total}`)

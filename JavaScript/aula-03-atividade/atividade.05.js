let lista = ["25", "73", "14"];

console.log(lista[0])
console.log(lista[1])
console.log(lista[2])

console.log(lista)  // ["item1", "item2", "item3"]
console.log(lista.length)  // 3

// Se atribuir na posição 5:
lista[5] = "item6"
console.log(lista)  // ["item1", "item2", "item3", empty × 2, "item6"]
console.log(lista.length)  // 6
let idades = ["10", "15", "39", "40", "55", "66"]

console.log(idades[0]);
console.log(idades[1]);
console.log(idades[2]);
console.log(idades[3]);
console.log(idades[4]);
console.log(idades[5]);

console.log(idades[idades.length]);

idades.forEach(function(item, indice) {
  console.log(`${indice}: ${item}`);
});
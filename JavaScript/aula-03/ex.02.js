let numeros = [10, 20, 30];

numeros.push(40);       // [10, 20, 30, 40]
numeros.pop();          // [10, 20, 30]
numeros.unshift(5);     // [5, 10, 20, 30]
numeros.shift();        // [10, 20, 30]

console.log(numeros.indexOf(20));  // 1
console.log(numeros.includes(50)); // false
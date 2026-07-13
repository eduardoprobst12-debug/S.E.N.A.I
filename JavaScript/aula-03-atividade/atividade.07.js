let animais = ["gato", "cachorro"]

animais.push("pássaro")
animais.push("peixe")
console.log(animais)  // ["gato", "cachorro", "pássaro", "peixe"]

let removido = animais.pop()
console.log("Removido:", removido)  // "peixe"
console.log(animais)  // ["gato", "cachorro", "pássaro"]

// Começando com o array do ex.6 após push: ["gato", "cachorro", "pássaro"]

animais.unshift("leão")
console.log(animais)  // ["leão", "gato", "cachorro", "pássaro"]

let primeiro = animais.shift()
console.log("Removido do início:", primeiro)  // "leão"
console.log(animais)  // ["gato", "cachorro", "pássaro"]
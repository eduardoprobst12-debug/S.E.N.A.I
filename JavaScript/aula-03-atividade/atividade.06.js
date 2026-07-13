let animais = ["gato", "cachorro"]

animais.push("pássaro")
animais.push("peixe")
console.log(animais)  // ["gato", "cachorro", "pássaro", "peixe"]

let removido = animais.pop()
console.log("Removido:", removido)  // "peixe"
console.log(animais)  // ["gato", "cachorro", "pássaro"]
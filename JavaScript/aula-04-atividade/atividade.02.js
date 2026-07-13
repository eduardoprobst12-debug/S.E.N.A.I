let pessoa = {
    nome: 'Eduardo',
    idade: 15,
    altura: 1.75,
    estudante: true,
}

for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

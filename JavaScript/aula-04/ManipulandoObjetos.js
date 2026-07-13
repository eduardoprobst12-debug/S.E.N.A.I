let carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022
};

// Adicionar
carro.cor = 'prata';

// Alterar
carro.ano = 2023;

// Remover
delete carro.modelo;

console.log(carro); // {marca: 'Toyota', ano: 2023, cor: 'prata'}
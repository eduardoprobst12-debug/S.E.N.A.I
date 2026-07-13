let alunos = [
  { nome: 'João', nota: 8.5 },
  { nome: 'Maria', nota: 9.0 },
  { nome: 'Pedro', nota: 7.0 }
];

// Percorrendo com forEach
alunos.forEach(function(aluno) {
  console.log(`${aluno.nome}: ${aluno.nota}`);
});
// Exemplo real: classificando um pedido
let status = 'enviado';

switch (status) {
  case 'pendente':
    console.log('Aguardando pagamento');
    break;
  case 'enviado':
    console.log('Pedido a caminho');
    break;
  case 'entregue':
    console.log('Pedido finalizado');
    break;
  default:
    console.log('Status desconhecido');
}
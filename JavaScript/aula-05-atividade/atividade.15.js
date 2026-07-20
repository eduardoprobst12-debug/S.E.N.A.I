let n1 = 15;
let n2 = 5;
let operador = '/';

switch (operador) {
    case "+":
        console.log (n1 + n2)
        break;

    case "_":
        console.log (n1 - n2)
        break;

    case "*":
        console.log (n1 * n2)
        break;

    case "/":
      if (n2 == 0) {
        console.log ("O numero não tem divisão")
      } else {
        console.log (n1 / n2)
      }
        break;

    default:
        console.log ("Error 404")      
}
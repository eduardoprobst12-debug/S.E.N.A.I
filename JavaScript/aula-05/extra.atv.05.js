let n1 = 10;
let n2 = 20;
let operador = "+";

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
function somar(valorUm, valorDois) {
  return valorUm + valorDois;
}

somar(1, 2);

function calcular(valorUm, valorDois, operando) {
  switch (operando) {
    case "+":
      return valorUm + valorDois;
    case "-":
      return valorUm - valorDois;
    case "/":
      return valorUm / valorDois;
    case "*":
      return valorUm * valorDois;
    default:
      return "Nenhum operando";
  }
}

console.log(calcular(1, 2, "+"));
console.log(calcular(1, 2, "-"));
console.log(calcular(1, 2, "/"));
console.log(calcular(1, 2, "*"));
console.log(calcular(1, 2, "m"));

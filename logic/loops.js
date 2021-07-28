let count = 0;

for (let i = 1; i <= 5; i++) {
  count += 1;
}

console.log(count);

const arr = [1, 2, 3, 4, 5];

arr.forEach((element, index, array) => console.log(element, index, array));

let sum = 0;

do {
  sum += 1;

  console.log("Do... While...", sum);
} while (sum !== 10);

let numberOne = 1;

while (numberOne !== 10) {
  numberOne += 1;

  console.log("While...", numberOne);
}

arr.reduce((acumulador, current) => {
  console.log("Previous", acumulador); // Valor acumulado das somas anteriores
  console.log("Current", current); // Valor atual do array

  return acumulador + current;
});

// Cria um novo array com todos os itens que passarem na validação
arr.filter((item) => item === 4);


// Pega o primeiro elemento que for de acordo com a validação
arr.find((item) => item > 3);

// Percore todo o array
arr.map((item) => item);

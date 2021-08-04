// 3
const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function pegaPar(numero) {
  for (i = 1; numero[i] <= 20; i++) {
    // Aqui no local de numero[0] <= 20, você poderia trocar para i <= numeros.length (O valor do tamanho do array números)
    if (numero[i] % 2 === 0) console.log("Os números pares são:" + numero[i]);
  }
}

pegaPar(numeros);

// 5

const redeInsta = redes.filter(retornaInsta); // Aqui, como você queria somente um objeto, poderia usar o find, pois ele buscaria até encontrar e pararia, o filter ele continua buscando mesmo pós encontrar, até percorer todos os itens do array.

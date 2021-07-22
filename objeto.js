const pessoa = {
  nome: "Leon",
  endereco: "Rua ...",
  idade: 29,
  fazerAniversario: function () {
    this.idade++;
  },
};

console.log("Nome", pessoa.nome);
console.log("Idade", pessoa.idade);

console.log(pessoa.fazerAniversario());
console.log("Idade", pessoa.idade);

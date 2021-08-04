function sendvalues() {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const sobre = document.getElementById("sobre").value;

  alert(nome + email + sobre);
}

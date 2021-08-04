function sendValues() {
  event.preventDefault();

  const name = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const sobre = document.getElementById("sobre").value;

  alert(`Nome: ${name}. Email: ${email}. Sobre ${sobre}`);
}

const campoEmailEvento = document.querySelector("button");

function verificadorEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

function validarEmail() {
  const campoEmail = document.getElementById("email").value;
  if (!verificadorEmail(campoEmail)) {
    document.getElementById("erro-email-invalido").style.display = "block";
  } else {
    document.getElementById("erro-email-invalido").style.display = "none";
  }
}

campoEmailEvento.addEventListener("click", validarEmail);

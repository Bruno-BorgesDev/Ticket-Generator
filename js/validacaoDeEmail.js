const email = document.getElementById("email");

function verificadorEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

email.addEventListener("blur", function () {
  const campoEmail = email.value.trim();
  let erroEmailVazio = false;
  let erroEmailIncorreto = false;

  if (!campoEmail) {
    document.getElementById("erro-email-necessario").style.display = "block";
    erroEmailVazio = true;
    email.focus();
  } else {
    document.getElementById("erro-email-necessario").style.display = "none";
  }

  if (!erroEmailVazio && !verificadorEmail(campoEmail)) {
    document.getElementById("erro-email-invalido").style.display = "block";
    erroEmailIncorreto = true;
    email.focus();
  } else {
    document.getElementById("erro-email-invalido").style.display = "none";
  }
});

const botao = document.querySelector("button");

// exibir erro no campo de nome
const nome = document.getElementById("nome");
function exibirErroNome() {
  const nomeerro = document.getElementById("nome").value;
  if (!nomeerro) {
    document.getElementById("erro-nome-necessario").style.display = "block";
  } else {
    document.getElementById("erro-nome-necessario").style.display = "none";
  }
}
nome.addEventListener("blur", exibirErroNome);

// Exibir erro no campo do github
const gitHub = document.getElementById("github");
function exibirErroGithub() {
  const githubErro = document.getElementById("email").value;
  if (!githubErro) {
    document.getElementById("erro-github-necessario").style.display = "block";
  } else {
    document.getElementById("erro-github-necessario").style.display = "none";
  }
}
gitHub.addEventListener("blur", exibirErroGithub);

botao.addEventListener("click", exibirErroNome);
// botao.addEventListener("click", exibirErroEmail);
botao.addEventListener("click", exibirErroGithub);

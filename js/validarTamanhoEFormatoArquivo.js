const arquivo = document.getElementById("file");

arquivo.addEventListener("change", function () {
  const tamanho = arquivo.files[0]?.size;
  const formato = arquivo.files[0]?.type;

  let erroTamanho = false;
  let erroFormato = false;

  if (tamanho < 500000) {
    document.getElementById("erro-aquivo-grande").style.display = "none";
    erroTamanho = true;
    arquivo.focus();
  } else {
    document.getElementById("erro-aquivo-grande").style.display = "block";
  }

  if (formato === "image/jpeg" || formato === "image/png") {
    console.log(formato);
    document.getElementById("erro-aquivo-formato").style.display = "none";
    erroFormato = true;
    arquivo.focus();
  } else {
    document.getElementById("erro-aquivo-formato").style.display = "block";
  }

  if (erroFormato || erroTamanho) {
    arquivo.value = "";
  }
});

const arquivoTamanho = document.getElementById("file");

arquivoTamanho.addEventListener("change", function validarArquivo(event) {
  const tamanho = arquivoTamanho.files[0].size;
  if (tamanho < 1048576) {
    document.getElementById("erro-aquivo-grande").style.display = "none";
  } else {
    document.getElementById("frmt-aqv").style.display = "none";
    document.getElementById("erro-aquivo-grande").style.display = "block";
    tamanho.value = "";
    event.preventDefault();
  }
});


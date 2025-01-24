const arquivoTipo = document.getElementById("file");

arquivoTipo.addEventListener("change", function () {
  const formato = arquivoTipo.files[0]?.type;
  if (formato === "image/jpeg" || formato === "image/png") {
    console.log(formato);
    document.getElementById("erro-aquivo-formato").style.display = "none";
  } else {
    document.getElementById("erro-aquivo-formato").style.display = "block";
    arquivoTipo.value = "";
  }
});

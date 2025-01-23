const arquivoTipo = document.getElementById("file");

arquivoTipo.addEventListener("change", function () {
  const formato = arquivoTipo.files[0].type;
  console.log(formato);
  if (formato === "image/jpeg" || formato === "image/png") {
    console.log("formato correto");
  } else {
    console.log("formato errado");
  }
});

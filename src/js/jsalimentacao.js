export function hideideSaldoAlimentacao() {
  var hideSaldoAlimentacao = document.getElementById("ali");
  if (hideSaldoAlimentacao.style.display === "none") {
    hideSaldoAlimentacao.style.display = "block";
  } else {
    hideSaldoAlimentacao.style.display = "none";
  }
}

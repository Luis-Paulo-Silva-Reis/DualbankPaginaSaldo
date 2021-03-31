export function hideSaldoAluguel() {
  var SaldoAluguel = document.getElementById("alu");
  if (SaldoAluguel.style.display === "none") {
    SaldoAluguel.style.display = "block";
  } else {
    SaldoAluguel.style.display = "none";
  }
}

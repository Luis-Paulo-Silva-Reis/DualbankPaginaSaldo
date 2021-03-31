export function hideSaldoDisponivel() {
    var Saldo = document.getElementById("saldodisponivel");
    if (Saldo.style.display === "none") {
      Saldo.style.display = "block";
    } else {
      Saldo.style.display = "none";
    }
  }
  
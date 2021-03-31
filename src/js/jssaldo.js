export function hideSaldo() {
  var Saldo = document.getElementById("saldo");
  if (Saldo.style.display === "none") {
    Saldo.style.display = "block";
  } else {
    Saldo.style.display = "none";
  }
}

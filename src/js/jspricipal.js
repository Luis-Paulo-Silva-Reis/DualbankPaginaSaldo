export function hideSaldoPricipal() {
  var SaldoPricipal = document.getElementById("pri");
  if (SaldoPricipal.style.display === "none") {
    SaldoPricipal.style.display = "block";
  } else {
    SaldoPricipal.style.display = "none";
  }
}

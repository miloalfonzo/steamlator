document.getElementById("calc").addEventListener("click", calcular);

function calcular() {
  let element = Number(document.getElementById("element").value);
  let percent = (element * 29) / 100;
  let result = element + percent;

  let showTextResult = (document.getElementById("result").style.visibility =
    "visible");
  let showResult = (document.getElementById(
    "numbResult"
  ).innerHTML = `El monto final a pagar es de: $${result} `);
  document.getElementById("numbResult").className = "";

  if (element == "" || element <= 0) {
    document.getElementById("numbResult").innerHTML = "Ingrese un monto valido";
    document.getElementById("numbResult").className = "danger";
  }
}

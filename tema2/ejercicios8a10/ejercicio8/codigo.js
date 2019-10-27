let info;
let num = prompt("Introduce un número entero");
let resultado = numeroParOImpar(num);

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
  info = document.getElementById("info");

  info.innerHTML = "Número " + resultado;
  info.innerHTML = numeroParOImpar(num);
}

function numeroParOImpar(num) {
  if (num % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}
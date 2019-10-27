let info;
let num = prompt("Introduce un número y te digo su factorial.");
let resultado = 1;//resultado debe estar inicializado y de valor 1 para el correcto funcionamiento

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
  info = document.getElementById("info");
  factorizar(num);
}

function factorizar(num) {
  for (let contador = 1; contador <= num; contador++) {
    resultado *= contador;
  }
  info.innerHTML = "El factorial de " + num + " es " + resultado;
}
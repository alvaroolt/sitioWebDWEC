let info;
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let numero = prompt("Introduce el número del DNI.");
let letra = prompt("Introduce la letra del DNI.");

letra = letra.toUpperCase();

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
  info = document.getElementById("info");
  comprobarDNI(numero, letra);
}

function comprobarDNI(numero, letra) {
  if (numero < 0 || numero > 99999999) {
    info.innerHTML = "El número es inválido.";
  }
  else {
    let letraVariable = letras[numero % 23];
    if (letraVariable != letra) {
      info.innerHTML = "Datos incorrectos.";
    }
    else {
      info.innerHTML = "Datos correctos. ";
    }
  }
}
/**
 * random() method
 * Returns a random number from 0 (inclusive) up to but not including 1 (exclusive)
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplo de uso</b></p>" +
        "<li><b>Número aleatorio entre 0 y 8(exclusive)</b> = " + Math.random()*8 + "</li>" +
        "</ul>";
}
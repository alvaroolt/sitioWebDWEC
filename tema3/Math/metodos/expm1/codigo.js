/**
 * expm1() method
 * Returns e^x - 1.
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplo de uso</b></p>" +
        "<li><b>e^12 - 1</b> = " + Math.expm1(12) + "</li>" +
        "</ul>";
}
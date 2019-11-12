/**
 * trunc() method
 * Returns the integer part of a number
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplos de uso</b></p>" +
        "<li><b>9.21</b> = " + Math.trunc(9.21) + "</li>" +
        "<li><b>16.03</b> = " + Math.trunc(16.03) + "</li>" +
        "</ul>";
}
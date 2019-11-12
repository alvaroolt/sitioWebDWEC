/**
 * log10() method
 * Returns the base 10 logarithm of a number
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplos de uso</b></p>" +
        "<li><b>log10 100000</b> = " + Math.log10(100000) + "</li>" +
        "<li><b>log10 π</b> = " + Math.log10(Math.PI) + "</li>" +
        "</ul>";
}
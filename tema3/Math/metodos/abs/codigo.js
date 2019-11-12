/**
 * abs() method
 * Return the absolute value of a number
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplos de uso</b></p>" +
        "<li><b>|-8|</b> = " + Math.abs(-8) + "</li>" +
        "<li><b>|14.27|</b> = " + Math.abs(14.27) + "</li>" +
        "</ul>";
}
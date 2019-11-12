/**
 * pow() method
 * Returns the value of x to the power of y (x^y)
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplos de uso</b></p>" +
        "<li><b>e^(2π)</b> = " + Math.pow(Math.E, 2 * Math.PI) + "</li>" +
        "<li><b>√2^2</b> = " + Math.pow(Math.SQRT2, 2) + "</li>" +
        "</ul>";
}
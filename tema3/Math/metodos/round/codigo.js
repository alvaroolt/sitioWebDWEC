/**
 * round() method
 * Rounds a number to the nearest integer.
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplos de uso</b></p>" +
        "<li><b>3.65</b> = " + Math.round(3.65) + "</li>" +
        "<li><b>7.14</b> = " + Math.ceil(3.65) + "</li>" +
        "</ul>";
}
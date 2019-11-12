/**
 * log() method
 * Returns the natural logarithm (base E) of a number
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplo de uso</b></p>" +
        "<li><b>log 2</b> = " + Math.log(2) + "</li>" +
        "</ul>";
}
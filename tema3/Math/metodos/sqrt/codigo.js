/**
 * sqrt() method
 * Returns the square root of a number
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplo de uso</b></p>" +
        "<li><b>√13</b> = " + Math.sqrt(13) + "</li>" +
        "</ul>";
}
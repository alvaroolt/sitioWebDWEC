/**
 * sign() method
 * Returns the sign of the value (positive(1), negative(-1) or 0)
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplos de uso</b></p>" +
        "<li><b>5</b> = " + Math.sign(5) + "</li>" +
        "<li><b>0</b> = " + Math.sign(0) + "</li>" +
        "<li><b>-9</b> = " + Math.sign(-9) + "</li>" +
        "</ul>";
}
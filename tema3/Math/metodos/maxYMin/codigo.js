/**
 * max() method
 * Returns the number with the highest value
 * 
 * min() method
 * Returns the number with the lowest value
 * 
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplos de uso</b></p>" +
        "<li><b>Máximo entre 12 y 10</b> = " + Math.max(12, 10) + "</li>" +
        "<li><b>Máximo entre -4 y 1</b> = " + Math.max(-4, 1) + "</li>" +
        "</ul>" +
        "<ul>" +
        "<li><b>Mínimo entre 12 y 10</b> = " + Math.min(12, 10) + "</li>" +
        "<li><b>Mínimo entre -4 y 1</b> = " + Math.min(-4, 1) + "</li>" +
        "</ul>";
}
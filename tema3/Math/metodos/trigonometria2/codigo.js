/**
 * asin() method
 * Returns the arc sine
 * 
 * acos() method
 * Returns the arc cosine
 * 
 * atan() method
 * Return the arc tangent
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplos de uso</b></p>" +
        "<li><b>asin 45</b> = " + Math.asin(45 * Math.PI / 180) + "</li>" +
        "<li><b>acos 45</b> = " + Math.acos(45 * Math.PI / 180) + "</li>" +
        "<li><b>atan 45</b> = " + Math.atan(45) + "</li>" +
        "</ul>";
}
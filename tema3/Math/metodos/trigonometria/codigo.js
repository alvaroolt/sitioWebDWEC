/**
 * sin() method
 * Returns the sine (a value between -1 and 1) of the angle x (given in radians)
 * 
 * cos() method
 * Returns the cosine (a value between -1 and 1) of the angle x (given in radians)
 * 
 * tan() method
 * Return the tangent of a number (angle)
 */
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Ejemplos de uso</b></p>" +
        "<li><b>sin 90</b> = " + Math.sin(90 * Math.PI / 180) + "</li>" +
        "<li><b>cos 180</b> = " + Math.cos(180 * Math.PI / 180) + "</li>" +
        "<li><b>tan 45</b> = " + Math.tan(45) + "</li>" +
        "</ul>";
}
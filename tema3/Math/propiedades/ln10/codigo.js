let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Valores numéricos de la propiedad LN10</b></p>" +
        "<li><b>Math.LN10:</b> " + Math.LN10 + "</li>" +
        "</ul>" +

        "<ul>" +
        "<p><b>Ejemplo de uso</b></p>" +
        "<li><b>ln10 e^2</b> = " + Math.pow(Math.LN10 * Math.E, 2) + "</li>" +
        "</ul>";
}
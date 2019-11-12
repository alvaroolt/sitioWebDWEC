let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML = "<ul>" +
        "<p><b>Valores numéricos de las propiedades E y PI</b></p>" +
        "<li><b>Math.E:</b> " + Math.E + "</li>" +
        "<li><b>Math.PI:</b> " + Math.PI + "</li>" +
        "</ul>" +

        "<ul>" +
        "<p><b>Ejemplo de uso</b></p>" +
        "<li><b>e^(2π)</b> = " + Math.pow(Math.E, 2 * Math.PI) + "</li>" +
        "</ul>";
}
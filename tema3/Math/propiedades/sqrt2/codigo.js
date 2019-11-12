let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<p><b>Valores numéricos de la propiedad SQRT2</b></p>" +
        "<li><b>Math.SQRT2:</b> " + Math.SQRT2 + "</li>" +
        "</ul>" +

        "<ul>" +
        "<p><b>Ejemplo de uso</b></p>" +
        "<li><b>√2</b> = " + Math.SQRT2 + "</li>" +
        "</ul>";
}
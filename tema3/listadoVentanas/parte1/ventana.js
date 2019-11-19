document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    escribirInfoPagina();
    document.getElementById("cerrarVentana").addEventListener("click", cerrarVentana);
}

function escribirInfoPagina() {
    document.getElementById("height").innerText = "Height: " + window.outerHeight;
    document.getElementById("width").innerText = "Width: " + window.outerWidth;
}

function cerrarVentana() {
    close();
}
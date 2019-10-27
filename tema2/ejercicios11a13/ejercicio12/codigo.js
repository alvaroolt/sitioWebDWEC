document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    let enlace = document.getElementById("enlace");
    enlace.addEventListener("click", clicarEnlace); //cuando se hace click en el enlace llamado "enlace", se ejecuta clicarEnlace
}

function clicarEnlace() {
    document.getElementById("adicional").className = "visible";
    enlace.className = "oculto";
}
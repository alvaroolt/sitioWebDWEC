let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    mostrarIn();
}

function mostrarIn() {
    info.innerHTML = "El método Array.isArray() determina si el valor pasado es un Array. <br/><br/>";
    let array = [1, 3, 2, "paco", 4, 5, "lopera", "delegado"];
    info.innerHTML += "Paso un array: " + Array.isArray(array) + "<br/>";
    info.innerHTML += "Paso undefined: " + Array.isArray(undefined) + "<br/>";
    info.innerHTML += "Paso cadena 'alvaro': " + Array.isArray("alvaro") + "<br/>";
    info.innerHTML += "Paso un true: " + Array.isArray(true) + "<br/>";
}
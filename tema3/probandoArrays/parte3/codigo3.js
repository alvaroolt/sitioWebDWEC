function iniciar() {
    let info = document.getElementById("info");
    mostrarIn();
}

function mostrarIn() {
    let array = [1, 3, 2, "paco", 4, 5, "lopera", "delegado"];

    info.innerHTML = "El método Array.isArray() determina si el valor pasado es un Array. <br/><br/>";
    info.innerHTML += "Mi array para hacer las comprobaciones es el siguiente: <br/>";
    array.forEach(function (value) {
        info.innerHTML += "Valor: " + value + "<br/>";
    })
    info.innerHTML += "<br/>Paso un array: " + Array.isArray(array) + "<br/>";
    info.innerHTML += "Paso undefined: " + Array.isArray(undefined) + "<br/>";
    info.innerHTML += "Paso cadena 'alvaro': " + Array.isArray("alvaro") + "<br/>";
    info.innerHTML += "Paso un true: " + Array.isArray(true) + "<br/>";
}

document.addEventListener("DOMContentLoaded", iniciar);
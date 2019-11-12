let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    mostrarArray();
}

function crearArray() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            arguments[i].forEach(function (valor) {
                array.push(valor);
            });
        } else
            array.push(arguments[i]);
    }
    return array;
}

function mostrarArray() {
    info.innerHTML = "El array es el siguiente: " + crearArray([1, 2, 3, 4, 5, 6], 1, 4, 3.2, "lopera", "delegado");
}
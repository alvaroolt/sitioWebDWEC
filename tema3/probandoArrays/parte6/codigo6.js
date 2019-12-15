function iniciar() {
    let info = document.getElementById("info");
    mostrarArray();
}

function crearArray() {
    let array = []; // inicializo/creo mi array
    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) { //si el valor del argumento de i es un array:
            arguments[i].forEach(function (valor) { //recorre el array que se encuentra en ese argumento
                array.push(valor);
            });
        } else
            array.push(arguments[i]);
    }
    return array;
}

function mostrarArray() {
    info.innerHTML = "El array es el siguiente: " + crearArray([1, 2, 3, 4, 5, 6], 1, 4, 3.2, "lopera", "delegado",["ariza","paco","juanbu","adri"]);
}

document.addEventListener("DOMContentLoaded", iniciar);
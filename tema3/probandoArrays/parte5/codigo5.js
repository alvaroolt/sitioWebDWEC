let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    mostrarArray();
}

function crearArray() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
    }
    return array;
}

//arguments es una propiedad de longitud que corresponde al número de argumentos pasados ​​a la función

function mostrarArray() {
    info.innerHTML = "El array es el siguiente: " + crearArray(1,2,3,4,"lopera","delegado");
}
function iniciar() {
    let info = document.getElementById("info");
    document.getElementById("boton").addEventListener("click", clicarBoton);
}

function clicarBoton() {
    info.innerHTML = ""; //así logro que cada vez que se clica el botón, se limpie el mensaje para volver a escribir
    mostrarArray();
}

function generarArray(dimension) {
    if (dimension < 1) {
        info.innerHTML = "Dimension no válida.";
        return;
    }
    let array = new Array(dimension);
    for (let i = 0; i < dimension; i++) {
        array[i] = i;
    }
    return array;
}

function mostrarArray() {
    let array = generarArray(document.getElementById("num").value);
    array.forEach(function (value, index) {
        info.innerHTML += "Índice: " + index + ". Valor: " + value + "<br/>";
    });
}

document.addEventListener("DOMContentLoaded", iniciar);
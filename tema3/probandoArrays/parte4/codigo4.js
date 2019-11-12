let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    mostrarArray();
}

function mostrarArray() {
    let dimension = 2;
    let tamano = 11;
    let array = ejecutarArray(dimension, tamano);
    info.innerHTML = "Dimensiones: " + dimension + ". Tamaño: " + tamano + "<br/>";
    array.forEach(function(value, index){
        info.innerHTML += "Índice: " + index + ". Valor: " + value + "<br/>";
    });
}

function ejecutarArray(dimension, tamano) {
    let array = new Array(dimension);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(tamano);
        for (let j = 0; j < array[i].length; j++) {
            array [i][j] = j;
        } 
    }
    return array;
}
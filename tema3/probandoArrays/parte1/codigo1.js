let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    mostrarArray();
}

function mostrarArray() {
    info.innerHTML = "";
    let array = [1, 3, 2, "paco", 4, 5, "lopera", "delegado"];
    array.forEach(function (value, index) {
        info.innerHTML += "Valor: " + value + " | Índice: " + index + " | Array: " + array + "<br/>";
    })
}
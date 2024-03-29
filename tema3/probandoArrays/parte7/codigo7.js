function iniciar() {
    let info = document.getElementById("info");
    ejecutarArray();
}

function ejecutarArray() {
    let array = [1, undefined, undefined, undefined, 4, 5, undefined, "lopera", "delegado", undefined, 2.1];
    info.innerHTML += "Array original: " + array + "<br/>";
    info.innerHTML += "Array sin undefined: " + eliminarUndefined(array);
}

function eliminarUndefined(array) {
    return array.filter(function (valor) {
        return valor != undefined; // devuelve los valores que no sean undefined
    });
}

document.addEventListener("DOMContentLoaded", iniciar);
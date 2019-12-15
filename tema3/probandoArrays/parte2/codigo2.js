function iniciar() {
    let info = document.getElementById("info");
    mostrarIn();
}

function mostrarIn() {
    info.innerHTML = "El operador in devuelve true si la propiedad especificada está en el objeto especificado o su prototipo. <br/>";
    let array = [1, 3, 2, "paco", 4, 5, "lopera", "delegado"];
    info.innerHTML += "2 en el array: " + (2 in array) + "<br/>";
    info.innerHTML += "'lopera' en el array: " + ('lopera' in array) + " (no es un índice, es un valor)<br/>";
    info.innerHTML += "length en el array: " + ('length' in array) + " (propiedad)";
}

document.addEventListener("DOMContentLoaded", iniciar);
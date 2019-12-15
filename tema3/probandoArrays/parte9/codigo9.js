function iniciar() {
    info = document.getElementById("info");
    ejecutarPruebas();
}

function ejecutarPruebas() {
    let tiempoInicial, tiempoFinal;
    tiempoInicial = performance.now();
    array = crearArray(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
        70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
        80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
        90, 91, 92, 93, 94, 95, 96, 97, 98, 99);
    tiempoFinal = performance.now();
    info.innerHTML += "Tiempo en crear array con 100 elementos directamente: " + (tiempoFinal - tiempoInicial) + " ms<br/>";

    tiempoFinal = performance.now();
    array = new Array(100);
    array.unshift(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
        70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
        80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
        90, 91, 92, 93, 94, 95, 96, 97, 98, 99);
    info.innerHTML += "Tiempo en crear array con 100 elementos con unshift: " + (tiempoFinal - tiempoInicial) + " ms<br/>";

    tiempoFinal = performance.now();
    array = new Array(100);
    array.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
        70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
        80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
        90, 91, 92, 93, 94, 95, 96, 97, 98, 99);
    info.innerHTML += "Tiempo en crear array con 100 elementos con push: " + (tiempoFinal - tiempoInicial) + " ms<br/>";

    array = crearArray();
    tiempoInicial = performance.now();
    array = [];
    tiempoFinal = performance.now();
    info.innerHTML += "Tiempo en eliminar array con 100 elementos directamente: " + (tiempoFinal - tiempoInicial) + " ms<br/>";

    array = crearArray();
    tiempoInicial = performance.now();
    while (array.length > 0) {
        array.shift();
    }
    tiempoFinal = performance.now();
    info.innerHTML += "Tiempo en eliminar array con 100 elementos con shift: " + (tiempoFinal - tiempoInicial) + " ms<br/>";

    array = crearArray();
    tiempoInicial = performance.now();
    while (array.length > 0) {
        array.pop();
    }
    tiempoFinal = performance.now();
    info.innerHTML += "Tiempo en eliminar array con 100 elementos con pop: " + (tiempoFinal - tiempoInicial) + " ms<br/>";
}

function crearArray() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
        70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
        80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
        90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
}

document.addEventListener("DOMContentLoaded", iniciar);
let info;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML += "Array.prototype.forEach(): Ejecuta la función indicada una vez por cada elemento del array.<br/>";
    info.innerHTML += "Array.prototype.every(): Devuelve true si todos los elementos en el array pasan la condición implementada por la función dada y false si alguno no la cumple.</br>";
    info.innerHTML += "Array.prototype.some(): Devuelve true si algún elemento del array cumple con la condición implementada por la función brindada, y false en caso de que ningún elemento cumpla con dicha condición.</br>";
    info.innerHTML += "Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.</br></br>";

    mostrarPruebas();
}

function mostrarPruebas() {
    let array = [0, 1, 2, 12, 46, 111, 234, 561, 1126, 4315];
    info.innerHTML += "Array: " + array + "<br/>";

    info.innerHTML += "forEach() recorre el array mostrando el índice y el valor.</br>";
    array.forEach(function (valor, index) {
        info.innerHTML += "Índice: " + index + " Valor: " + valor + "<br/>";
    }) + "<br/>";

    info.innerHTML += "every(): todos los elementos son mayor que 10. "
        + array.every(function (valor) {
            return valor > 10;
        }) + "</br>";

    info.innerHTML += "some(): algún elemento es mayor que 200." +
        +array.some(function (valor) {
            return valor > 200;
        }) + "</br>";

    let array2 = array.filter(function (valor) { return valor > 60; })
    info.innerHTML += "filter(): Devuelve nuevo array con los valores mayores que 60: " + array2 + "</br>";
}
document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    document.getElementById("boton").addEventListener("click", annadir); //cuando se clica en el botón "boton" se ejecuta annadir
}

function annadir() {
    let elemento = document.createElement("li");
    let contenidoElemento = document.createTextNode("Elemento de prueba");
    elemento.appendChild(contenidoElemento); //appendChild agrega contenidoElemento a elemento

    document.getElementById("lista").appendChild(elemento); //appendChild agrega el elemento a la lista (<ul>)
}
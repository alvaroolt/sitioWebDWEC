/**
 * Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún puede escribir.
 * Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas horizontales cuando se haya llegado
 * al máximo número de caracteres.
 * 
 * @author: Alvaro Leiva Toledano
 */

let info;
let text;
let contadorCaracteres;
const maxCaracteres = 7;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    text = document.getElementById("texto");
    text.addEventListener("keypress", limitarNumeroCaracteres); //keypress, limitarNumeroCaracteres se ejecuta al pulsar la tecla
    text.addEventListener("keyup", actualizarCaracteres); //keyup, actualizarCaracteres se ejecuta cuando se deja de pulsar la tecla
}

function limitarNumeroCaracteres(evento) {
    contadorCaracteres = text.value.length + 1;

    if (contadorCaracteres > maxCaracteres) {
        evento.preventDefault();
        return false;
    }
    return true;
}

function actualizarCaracteres() {
    contadorCaracteres = text.value.length;
    let cantidadCaracteresPermitidos = maxCaracteres - contadorCaracteres;
    if (cantidadCaracteresPermitidos > 0) {
        if (cantidadCaracteresPermitidos == 1) {
            info.innerHTML = "Puedes escribir otro caracter más.";
        }
        else
            info.innerHTML = "Puedes escribir otros " + cantidadCaracteresPermitidos + " caracteres más.";
    }
    else
        info.innerHTML = "Has alcanzado el número máximo de caracteres.";
}
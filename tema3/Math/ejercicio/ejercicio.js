/**
 * Utiliza las siguientes variables (A = 5'7, B = 6'2, C = 6'8, D = -6) y los métodos de la clase Math para que:
 * A y D sean iguales
 * C sea menor que B
 * A y B sean iguales
 * D sea  mayor que C
 * Todos sean iguales
 */
let info;

const A = 5.7;
const B = 6.2;
const C = 6.8;
const D = -6;

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    info = document.getElementById("info");
    info.innerHTML =
        "<ul>" +
        "<li>A = " + A +
        "<li>B = " + B +
        "<li>C = " + C +
        "<li>D = " + D +
        "</ul>" +
        "<p>A == D: " + AigualD() + "</p>" +
        "<p>C < B: " + CmenorB() + "</p>" +
        "<p>A == B: " + AigualB() + "</p>" +
        "<p>D > C: " + DmayorC() + "</p>" +
        "<p>A == B == C == D: " + todosIguales() + "</p>";
}

function AigualD() {

    let A1 = Math.round(A);
    let D1 = Math.abs(D);

    if (A1 == D1)
        return true;
    else
        return false;
}

function CmenorB() {

    let C2 = Math.floor(C);

    if (C2 < B)
        return true;
    else
        return false;
}

function AigualB() {

    let A3 = Math.round(A);
    let B3 = Math.floor(B);

    if (A3 == B3)
        return true;
    else
        return false;
}

function DmayorC() {

    let D4 = Math.pow(D, 2);

    if (D4 > C)
        return true;
    else
        return false;
}

function todosIguales() {

    let A5 = Math.round(A);
    let B5 = Math.floor(B);
    let C5 = Math.floor(C);
    let D5 = Math.abs(D);

    if (A5 == B5 || C5 == D5 || A5 == C5 || B5 == D5)
        return true;
    else
        return false;
}

/**
    @author: ALVARO LEIVA TOLEDANO
*/
let inputNombre;
let inputFecha;
let inputDni;

let spanDni;
let spanNombre;
let spanError;

let botonNuevoEmpleado;


let validarDni = () => {
    return spanDni.innerHTML = Validar.validarDni(inputDni.value);
}

let validarNombre = () => {
    return spanNombre.innerHTML = Validar.validarNombre(inputNombre.value);
}

let crearVentana = () => {
    let cadenaError = validarDni() + validarNombre();
    if (cadenaError.length == 0) {
        let empleado = new Empleado(inputNombre.value, inputFecha.value, inputDni.value);
        empleado.crearVentana();
        limpiarFormulario();
    } else {
        cadenaError = `Por favor rellene el formulario correctamente.`;
        spanError.innerHTML = cadenaError;
    }
}

let limpiarFormulario = () => {
    inputDni.value = ``;
    inputNombre.value = ``;
    inputFecha.value = ``;
    spanError.innerHTML = ``;
}

function iniciar() {
    inputNombre = document.getElementById("inputNombre");
    inputFecha = document.getElementById("inputFecha");
    inputDni = document.getElementById("inputDni");
    spanDni = document.getElementById("spanDni");
    spanNombre = document.getElementById("spanNombre");
    spanFecha = document.getElementById("spanFecha");
    spanError = document.getElementById("errorFormulario");

    inputDni.addEventListener("blur", validarDni);
    inputNombre.addEventListener("blur", validarNombre);

    botonNuevoEmpleado = document.getElementById("nuevoEmpleado");
    botonNuevoEmpleado.addEventListener("click", crearVentana);
}

document.addEventListener("DOMContentLoaded", iniciar);
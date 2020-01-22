/**
    @author: ALVARO LEIVA TOLEDANO
*/

let validarDni = () => {
    return spanDni.innerHTML = Validar.validarDni(inputDni.value);
}

let validarNombre = () => {
    return spanNombre.innerHTML = Validar.validarNombre(inputNombre.value);
}

let validarFecha = () =>{
    return spanFecha.innerHTML = Validar.validarFecha(inputFecha.value);
}

let crearVentana = () => {
    let cadenaError = validarDni() + validarNombre() + validarFecha();
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
    let inputNombre = document.getElementById("inputNombre");
    let inputFecha = document.getElementById("inputFecha");
    let inputDni = document.getElementById("inputDni");
    let spanDni = document.getElementById("spanDni");
    let spanNombre = document.getElementById("spanNombre");
    let spanFecha = document.getElementById("spanFecha");
    let spanError = document.getElementById("errorFormulario");

    inputDni.addEventListener("blur", validarDni);
    inputNombre.addEventListener("blur", validarNombre);
    inputFecha.addEventListener("blur", validarFecha);

    let botonNuevoEmpleado = document.getElementById("nuevoEmpleado");
    botonNuevoEmpleado.addEventListener("click", crearVentana);
}

document.addEventListener("DOMContentLoaded", iniciar);
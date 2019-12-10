let peso;
let mensajeAccion;
let imagen;

function iniciar() {
    peso = document.getElementById("peso");
    mensajeAccion = document.getElementById("mensajeAccion");
    imagen = document.getElementById("imagen");
    asignarinformacionGato();
    document.getElementById("jugar").addEventListener("click", jugar);
    document.getElementById("comer").addEventListener("click", comer);
    document.getElementById("dormir").addEventListener("click", dormir);

    function jugar() {
        try {
            gato.jugar();
            actualizarMensajeAccion("¿Un fornite?", "images/jugar.jpg");
        } catch (e) {
            actualizarMensajeAccion(e.message, "images/muerto.jpg");
        }
    }

    function comer() {
        try {
            gato.comer();
            actualizarMensajeAccion("Que hambre miarma", "images/comer.jpg");
        } catch (e) {
            actualizarMensajeAccion(e.message, "images/muerto.jpg");
        }
    }

    function dormir() {
        try {
            actualizarMensajeAccion(gato.dormir(), "images/dormir.jpg");
        } catch (e) {
            actualizarMensajeAccion(e.message, "images/muerto.jpg");
        }
    }



    function actualizarMensajeAccion(mensaje, rutaimagen) {
        mensajeAccion.textContent = mensaje;
        imagen.src = rutaimagen;
        asignarPeso();
    }

    function asignarPeso() {
        peso.textContent = "Peso: " + gato.peso + " kg";
    }
    function asignarinformacionGato() {
        document.getElementById("nombre").textContent += gato.nombre;
        document.getElementById("fechaNacimiento").textContent += gato.getFechaNacimiento();
        mostrarEdad();
        document.getElementById("raza").textContent += gato.raza;
        asignarPeso();
    } 
}

function mostrarEdad() {
    mensaje = "";
    let edad = gato.calcularEdad();
    if (Array.isArray(edad)) {
        meses = edad[0];
        dias = edad[1];
        if (meses == 0 && dias == 0)
            mensaje = "Recien nacido";
        else if (meses == 0 && dias == 1)
            mensaje = dias + " día";
        else if (meses == 0 && dias > 1)
            mensaje = dias + " días";
        else if (meses == 1 && dias == 0)
            mensaje = mes + " mes";
        else if (meses == 1 && dias == 1)
            mensaje = meses + " mes y " + dias + " día";
        else if (meses > 1 && dias == 1)
            mensaje = meses + " meses y " + dias + " días";
        else if (meses == 1 && dias > 1)
            mensaje = meses + " mes y " + dias + " días";
        else
            mensaje = meses + " meses y " + dias + " días";
    } else {
        mensaje = (edad == 1) ? edad + " año" : edad + " años";
    }
    document.getElementById("edad").textContent += mensaje;
}

window.addEventListener("DOMContentLoaded", iniciar);
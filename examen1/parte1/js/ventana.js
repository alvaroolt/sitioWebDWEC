/**
    @author: ALVARO LEIVA TOLEDANO
*/
function iniciar() {
    document.getElementById("infoPagina").addEventListener("click", escribirInfoPagina);
    document.getElementById("cerrarVentana").addEventListener("click", cerrarVentana);
}

function escribirInfoPagina() {
    document.getElementById("diaSemanaActual").innerHTML = "Hoy es " + obtenerDiaSemanaHoy() + ".";
    document.getElementById("mensajeInformativo").innerHTML = mensajeMotivador();
}

let hoy = new Date();
let horas = new String(hoy.getHours());
let minutos = new String(hoy.getMinutes());

function obtenerHoraMinutosActual(horaOMinutos) {

    if (horaOMinutos.length == 1)
        horaOMinutos = "0" + horaOMinutos;

    return horaOMinutos;

}

function obtenerHora() {

    return obtenerHoraMinutosActual(horas) + ":" + obtenerHoraMinutosActual(minutos);
}

function obtenerDiaSemanaHoy() {
    let dia = hoy.getDay();

    switch (dia) {
        case 1:
            return "lunes";
        case 2:
            return "martes";
        case 3:
            return "miércoles";
        case 4:
            return "jueves";
        case 5:
            return "viernes";
        case 6:
            return "sábado";
        default:
            return "domingo";
    }

}

function mensajeMotivador() {

    horas = Number(obtenerHoraMinutosActual(horas));
    let mensaje = "Son las " + obtenerHora() + ". ";

    if (horas >= 18)
        mensaje += "Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar.";
    else if (horas >= 8 && horas < 18)
        mensaje += "Pronto llegan las vacaciones. Aguanta.";
    else
        mensaje += "Ya es hora de que comiences a trabajar. Hay que levantar el país.";
    return mensaje;
}

function cerrarVentana() {
    close();
}

document.addEventListener("DOMContentLoaded", iniciar);
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

function obtenerHoraActual() {
    let horas = new String(hoy.getHours());

    if (horas.length == 1)
        horas = "0" + horas;

    return horas;
}

function obtenerMinutosActuales() {
    let minutos = new String(hoy.getMinutes());

    if(minutos.length == 1)
        minutos = "0" + minutos;
    
    return minutos;
}

function obtenerHora() {

    return obtenerHoraActual() + ":" + obtenerMinutosActuales();
}

function obtenerDiaSemanaHoy() {
    let dia = hoy.getDay();

    let diaEnLetra;

    switch (dia) {
        case 1:
            diaEnLetra = "lunes";
            break;
        case 2:
            diaEnLetra = "martes";
            break;
        case 3:
            diaEnLetra = "miércoles";
            break;
        case 4:
            diaEnLetra = "jueves";
            break;
        case 5:
            diaEnLetra = "viernes";
            break;
        case 6:
            diaEnLetra = "sábado";
            break;
        default:
            diaEnLetra = "domingo";
            break;
    }

    return diaEnLetra;
}

function mensajeMotivador() {

    horas = Number(obtenerHoraActual());
    minutos = Number(obtenerMinutosActuales());
    let mensaje = "Son las " + obtenerHora() + ". ";

    if (horas > 18 || (horas == 18 && minutos > 0))
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
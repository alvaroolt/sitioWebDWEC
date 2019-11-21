let cronometro;
function iniciar() {
    cronometro = document.getElementById("cronometro");
    setInterval(mostrarCronometro, 1000);
}

function mostrarCronometro() {
    let date = new Date(); //necesario para sacar la hora exacta actual
    let horas = new String(date.getHours());
    let minutos = new String(date.getMinutes());
    let segundos = new String(date.getSeconds());

    if (horas.length == 1)
        horas = "0" + horas;
    if (minutos.length == 1)
        minutos = "0" + minutos;
    if (segundos.length == 1)
        segundos = "0" + segundos;

    cronometro.innerHTML = horas + ":" + minutos + ":" + segundos + " h";
}

window.addEventListener("load", iniciar);
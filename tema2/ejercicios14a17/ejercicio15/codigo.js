let info;
document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    info = document.getElementById("info");
    document.addEventListener('mousemove', informacion);
    document.addEventListener('keypress', informacion);
    document.addEventListener('click', informacion);
}

function informacion(elEvento) {
    switch (elEvento.type) {
        case 'mousemove':
            info.style.background = '#FFF'
            let coordenadaXrelativa, coordenadaYrelativa, coordenadaXabsoluta, coordenadaYabsoluta;
            coordenadaXabsoluta = elEvento.pageX;
            coordenadaXrelativa = elEvento.clientX;
            coordenadaYabsoluta = elEvento.pageY;
            coordenadaYrelativa = elEvento.clientY;
            muestraInformacion(['Ratón', 'Navegador [' + coordenadaXrelativa + ', ' + coordenadaYrelativa + ']', 'Pagina [' + coordenadaXabsoluta + ', ' + coordenadaYabsoluta + ']']);
            break;
        case 'keypress':
            info.style.background = '#CCE6FF';
            let letra = String.fromCharCode(elEvento.charCode);
            let codigo = letra.charCodeAt(0);
            muestraInformacion(['Teclado', 'Carácter [' + letra + ']', 'Código [' + codigo + ']']);
            break;
        case 'click':
            info.style.backgroundColor = '#FFFFCC';
            break;
    }
}

function muestraInformacion(mensaje) {
    info.innerHTML = '<h1>' + mensaje[0] + '</h1>';
    for (var i = 1; i < mensaje.length; i++) {
        info.innerHTML += '<p>' + mensaje[i] + '</p>';
    }
}
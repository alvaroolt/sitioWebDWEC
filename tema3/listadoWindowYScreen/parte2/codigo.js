function iniciar() {
    document.addEventListener("scroll", hacerScroll);
    //let botones = document.getElementsByTagName("button");
    //botones[0].addEventListener;
    document.getElementById("bajarLinea").addEventListener("click", bajarLinea);
    document.getElementById("subirLinea").addEventListener("click", subirLinea);
    document.getElementById("bajarPagina").addEventListener("click", bajarPagina);
    document.getElementById("subirPagina").addEventListener("click", subirPagina);
    document.getElementById("inicio").addEventListener("click", inicio);
    document.getElementById("final").addEventListener("click", final);
}

function hacerScroll() {
    let info = document.getElementById("info");
    info.innerHTML = "window.scrollX = " + window.scrollX + "<br/>";
    info.innerHTML += "window.scrollY = " + window.scrollY + "<br/>";
    info.innerHTML += "window.scrollbars = " + window.scrollbars.visible + "<br/>";
    //info.innerHTML += "<p>Bajar una línea<button id=\"bajarLinea\">Bajar línea</button></p><p>Subir una línea<button id=\"subirLinea\">Subir línea</button></p><p>Bajar una página<button id=\"bajarPagina\">Bajar página</button></p><p>Subir una página<button id=\"subirPagina\">Subir página</button></p><p>Ir al principio<button id=\"inicio\">Ir al principio</button></p><p>Ir al final<button id=\"final\">Ir al final</button></p>";
}

function bajarLinea() {
    scroll(scrollX, scrollY + 5);
}
function subirLinea() {
    scroll(scrollX, scrollY - 5);
}
function bajarPagina() {
    scroll(scrollX, scrollY + innerHeight);
}
function subirPagina() {
    scroll(scrollX, scrollY - innerHeight);
}
function final() {
    scroll(scrollX, scrollY + document.body.scrollHeight);
}
function principio() {
    scroll(scrollX, scrollY - document.body.scrollHeight);
}

window.addEventListener("DOMContentLoaded", iniciar);
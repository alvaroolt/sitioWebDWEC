function iniciar() {
    document.addEventListener("scroll", hacerScroll);
    //let botones = document.getElementsByTagName("button");
    //botones[0].addEventListener;
    document.getElementById("bajarLinea").addEventListener("click", bajarLinea);
    document.getElementById("subirLinea").addEventListener("click", subirLinea);
    document.getElementById("bajarPagina").addEventListener("click", bajarPagina);
    document.getElementById("subirPagina").addEventListener("click", subirPagina);
    document.getElementById("inicio").addEventListener("click", principio);
    document.getElementById("final").addEventListener("click", final);
}

function hacerScroll() {
    let info2 = document.getElementById("info2");
    info2.innerHTML = "window.scrollX = " + window.scrollX + "<br/>";
    info2.innerHTML += "window.scrollY = " + window.scrollY + "<br/>";
    info2.innerHTML += "window.scrollbars = " + window.scrollbars.visible + "<br/>";
}

function bajarLinea() {
    scroll(scrollX, scrollY + 20);
}
function subirLinea() {
    scroll(scrollX, scrollY - 20);
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
function iniciar() {
    crearEtiquetas();
    rellenarEtiquetas();
}

function crearEtiquetas() {
    let etiquetaUl = document.createElement("ul");
    for (let i = 1; i < 5; i++) {
        let etiquetaLi = document.createElement("li");
        etiquetaLi.setAttribute("id", "li" + i);
        etiquetaUl.appendChild(etiquetaLi);
    }
    document.body.appendChild(etiquetaUl);
}

function rellenarEtiquetas() {
    document.getElementById("li1").innerHTML = "window.outerHeight " + window.outerHeight + " devuelve la altura externa de la ventana del navegador";
    document.getElementById("li2").innerHTML = "window.innerHeight " + window.innerHeight + " devuelve la altura del área de contenido de una ventana";
    document.getElementById("li3").innerHTML = "window.screen.availHeight " + window.screen.availHeight + " devuelve la altura de la pantalla del usuario, en píxeles, menos las características de la interfaz (como la barra de tareas de Windows)";
    document.getElementById("li4").innerHTML = "window.screen.height " + window.screen.height + " devuelve la altura total de la pantalla del usuario, en píxeles";
}

window.addEventListener("DOMContentLoaded", iniciar);
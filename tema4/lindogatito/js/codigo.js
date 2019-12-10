let error;
function iniciar() {
    document.getElementById("crearGato").addEventListener("click", crearGato);
    error = document.getElementById("error");
}

function crearGato() {
    let nombre = document.getElementById("nombre").value;
    let raza = document.getElementById("raza").value;
    let peso = document.getElementById("peso").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;

    try {
        crearVentana(new Gato(nombre, raza, peso, fechaNacimiento))
    } catch (e) {
        error.textContent = e.message;
    }
}

function crearVentana(gato) {
    let ventana = window.open("", "", "width=600, height=500");
    let pagina =
        `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" http-equiv="Content-Type" content="text/html" />
    <title>Gatito</title>
    <link rel="stylesheet" type="text/css" href="css/stylesVentana.css">
    <script type="text/javascript" src="js/controlGato.js"></script>
</head>

<body>
    <noscript>
        <p>JavaScript está deshabilitado. Es posible que la página no se visualice correctamente.</p>
    </noscript>
    <div id="infoGato">
        <ul>
            <li id="nombre"><p>Nombre del gato: </p></li>
            <li id="raza"><p>Raza: </p></li>
            <li id="peso"><p>Peso: </p></li>
            <li id="fechaNacimiento"><p>Fecha de nacimiento: </p></li>
            <li id="edad"><p>Edad: </p></li>
        </ul>
        <ul>
            <li><button id="jugar">Jugar</button></li>
            <li><button id="comer">Comer</button></li>
            <li><button id="dormir">Dormir</button></li>
        </ul>
        <img id="imagen" src="images/gato.jpg"><br/>
        </div>
        <p id="mensajeAccion"><p>
    <footer>Autor: Álvaro Leiva Toledano</footer>
</body>

</html>`;
    ventana.document.open();
    ventana.document.write(pagina);
    ventana.document.close();
    ventana.gato = gato;
}

window.addEventListener("DOMContentLoaded", iniciar);
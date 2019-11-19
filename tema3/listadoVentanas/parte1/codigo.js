document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    document.getElementById("ventanas").addEventListener("click", abrirVentana);
}

function abrirVentana() {
    let ventana = open("", "Ventana credada mediante botón", "width=300,height=200,top=0,left=0")
    let contenido = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8" http-equiv="Content-Type" content="text/html" />
            <title>Parte 1 - Window</title>
            <script type="text/javascript" src="ventana.js"></script>
        </head>
        <body>
            <noscript>
                <p>JavaScript está deshabilitado. Es posible que la página no se visualice correctamente.</p>
            </noscript>
            <p>Se han utilizado las siguientes propiedades para crear la ventana:</p>
            <ul>
                <li id="width"></li>
                <li id="height"></li>
            </ul>
            <button id="cerrarVentana">Cerrar ventana</button>
            <!--<p>Pulsa F12 para abrir la consola.</p>-->
            <footer>Autor: Álvaro Leiva Toledano</footer>
        </body>
        </html>`

    ventana.document.open();
    ventana.document.write(contenido);
    ventana.document.close();
}


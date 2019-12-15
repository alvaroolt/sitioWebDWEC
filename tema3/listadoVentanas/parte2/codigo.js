function iniciar() {
    document.getElementById("ventanas").addEventListener("click", abrirVentanas);
}

function abrirVentanas() {
    let top = 25;
    let left = 25;
    for (let i = 1; i < 6; i++) {
        let ventana = open("", "", "width=300,height=200,top=" + top + ",left=" + left + "");
        let contenido = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8" http-equiv="Content-Type" content="text/html" />
            <title>Parte 2 - Ventanas (` + i +`)</title>
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

        top += 20;
        left += 20;
    }
}

document.addEventListener("DOMContentLoaded", iniciar);
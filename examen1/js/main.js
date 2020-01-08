/**
    @author: ALVARO LEIVA TOLEDANO
*/
function iniciar() {
    document.getElementById("deTodoUnPoco").addEventListener("click", abrirDeTodoUnPoco);
    document.getElementById("formularioEmpleado").addEventListener("click", abrirFormularioEmpleado);
}

function abrirDeTodoUnPoco() {
    let ventana = open("", "", "width=500,height=300,top=45,left=145")
    let contenidoPagina = `
    <!DOCTYPE html>
    <html">
        <head>
            <meta charset="UTF-8" http-equiv="Content-Type" content="text/html" />
            <title>Examen DWEC Diciembre 2019 | Álvaro Leiva Toledano | De todo un poco</title>
            <link rel="stylesheet" type="text/css" href="css/estilos.css">
            <script type="text/javascript" src="parte1/js/ventana.js"></script>
        </head>
    
        <body>
            <noscript>
                <p>JavaScript está deshabilitado. Es posible que la página no se visualice correctamente.</p>
            </noscript>
            <h1>Álvaro Leiva Toledano</h1>
            <h2>Examen diciembre 2019</h2>
            <h3>De todo un poco</h3>
            <button id="infoPagina">Informa</button>
            <button id="cerrarVentana">Salir</button>
            <p id="diaSemanaActual"></p>
            <p id="mensajeInformativo"></p>
        </body>
    
        </html>`

    ventana.document.open();
    ventana.document.write(contenidoPagina);
    ventana.document.close();
}

function abrirFormularioEmpleado() {
    let ventana = open("", "", "width=500,height=300,top=45,left=700")
    let contenidoPagina = `
    <!DOCTYPE html>
    <html">
        <head>
            <meta charset="UTF-8" http-equiv="Content-Type" content="text/html" />
            <title>Examen DWEC Diciembre 2019 | Álvaro Leiva Toledano | Formulario empleado</title>
            <link rel="stylesheet" type="text/css" href="css/estilos.css">
            <script type="text/javascript" src="parte2/js/ventana.js"></script>
        </head>
    
        <body>
            <noscript>
                <p>JavaScript está deshabilitado. Es posible que la página no se visualice correctamente.</p>
            </noscript>
            <h1>Álvaro Leiva Toledano</h1>
            <h2>Examen diciembre 2019</h2>
            <h3>Formulario empleado</h3>
            <ul>
                <li><label>Nombre empleado </label><input type="text"/></li>
                <li><label>Fecha de nacimiento </label><input type="date"/></li>
                <li><label>DNI </label><input type="text"/></li>
            </ul>
            <br/>
            <button  id="nuevoEmpleado">Confirmar nuevo empleado</button>
            <p id="error"></p>
        </body>
    
        </html>`

    ventana.document.open();
    ventana.document.write(contenidoPagina);
    ventana.document.close();
}

document.addEventListener("DOMContentLoaded", iniciar);
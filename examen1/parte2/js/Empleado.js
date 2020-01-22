/**
    @author: ALVARO LEIVA TOLEDANO
*/

function Empleado(nombre, fecha, dni) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.dni = dni;
}

//Getters
Empleado.prototype.getNombre = function () {
    return this.nombre;
}

Empleado.prototype.getFecha = function () {
    return this.fecha;
}

Empleado.prototype.getDni = function () {
    return this.dni;
}

Empleado.prototype.crearVentana = function () {
    let ventana = window.open("", "", "width=500,height=300,top=75,left=700");
    ventana.document.write(
        `<!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8" http-equiv="Content-Type" content="text/html" />
                <link rel="stylesheet" type="text/css" href="css/estilos.css">
            </head>
            <body>
            <noscript>
                <p>JavaScript está deshabilitado. Es posible que la página no se visualice correctamente.</p>
            </noscript>
            <main>
                <ul>
                    <li>Nombre: ${this.getNombre()}</li>
                    <li>Dni: ${this.getDni()}</li>
                    <li>Fecha: ${this.getFecha()}</li>
                </ul>
            </main>
            </body>
        </html>`
    );
    ventana.document.close();
}
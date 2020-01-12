/**
    @author: ALVARO LEIVA TOLEDANO
*/
let Validar = {
    validarDni: function (dni) {
        const re = /^(\d{8})[ -]?([A-Za-z])$/;
        let arrayDni = re.exec(dni.trim());
        let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";

        if (re.test(dni.trim())) {
            if (arrayDni[2].toUpperCase() != cadena[arrayDni[1] % 23].toUpperCase()) {
                return `El dni ${arrayDni[0]} no es correcto`;
            } else {
                return ``;
            }
        } else {
            return `Formato dni incorrecto`;
        }

    }, validarNombre: function (nombre) {
        const re = /^[A-Za-zñóáéíúÁÉÍÓÚÑ]+[ ]?[A-Za-zñóáéíúÁÉÍÓÚÑ]+[ ]?[A-Za-zñóáéíúÁÉÍÓÚÑ]+$/;
        if (re.test(nombre.trim())) {
            return ``;
        } else {
            return `Nombre incorrecto`;

        }
    }, validarFecha: function (fecha) {
        const re = /^(\d{2})([-/])(\d{2})\2(\d{4})$/;

        if (!re.test(fecha)) {
            return "Error.La fecha debe tener el siguiente formato: dd/mm/aaaa o dd-mm-aaaa";
        }
        else {

            let [, dia, , mes, anno] = re.exec(fecha);
            dia = Number(dia);
            mes = Number(mes);
            anno = Number(anno);
            let date = new Date(`${anno}/${mes}/${dia}`);
            let hoy = new Date();

            if (date.getFullYear() === anno && date.getMonth() === mes - 1 && date.getDate() === dia) {
                if ((hoy.getFullYear() < anno) || (hoy.getFullYear() === anno && (hoy.getMonth()+1) < mes) || (hoy.getFullYear() === anno && (hoy.getMonth()+1) === mes && hoy.getDate() < dia)) {
                    return "No puedes nacer en el futuro.";
                }
                else {
                    return "";
                }
            }
            else {
                return "La fecha introducida no es correcta.";
            }
        }
    }
};
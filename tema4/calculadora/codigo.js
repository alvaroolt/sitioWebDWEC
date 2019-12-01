function iniciar() {
    calculadora.crearCalculadora(); //invocamos la función crearCalculadora del objeto calculadora
}

let calculadora = {
    botones: ['CE', 'DEL', '%', '+', '7', '8', '9', '-', '4', '5', '6', 'X', '1', '2', '3', '/', '0', '+/-', ',', '='], //los botones de la calculadora
    inputMostrar: 0,
    nuevoValorAnnadido: false,
    suma: false, //se ha clicado en la operación suma
    resta: false, //se ha clicado en la operación resta
    division: false, //se ha clicado en la operación división
    multiplicacion: false, //se ha clicado en la operación multiplicación
    porcentaje: false, //se ha clicado en la operación porcentaje
    operacionActual: false, 
    operacionPosterior: false,
    primerNumero: true,
    valor1: 0, //primer valor introducido (antes de clicar una operación)
    valor2: 0, //segundo valor introducido (después de clicar una operación)
    realizarOperacion: false, //se ha realizado la operación


    crearCalculadora() {
        calculadora.crearDivPrincipal();
        calculadora.crearBotones(calculadora.botones);
        inputMostrar = document.getElementById("inputMostrar");
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("click", calculadora.comportamiento);
        }
    },

    crearDivPrincipal() {
        let div = document.createElement('div');
        div.id = 'divPrincipal';
        div.style.backgroundColor = 'burlywood';
        div.style.width = '245px';
        document.body.appendChild(div);
    },
    crearBotones(botones) {
        let input;
        let divPrincipal = document.getElementById('divPrincipal');
        let inputText = document.createElement('input'); //este input corresponde a la pantalla de la calculadora
        inputText.type = 'text';
        inputText.id = 'inputMostrar';
        inputText.readOnly = true;
        inputText.style.width = '226px';
        inputText.style.height = '30px';
        inputText.style.margin = '5px';
        inputText.value = "0";
        inputText.style.textAlign = 'right';
        inputText.style.fontSize = '22px';
        divPrincipal.appendChild(inputText);
        divPrincipal.appendChild(document.createElement('br'));
        for (let i = 1; i <= botones.length; i++) {
            input = document.createElement('input');
            input.type = 'button';
            input.value = botones[i - 1];
            input.id = botones[i - 1];
            input.style.fontSize = '18px';
            input.style.height = '50px';
            input.style.width = '50px';
            input.style.margin = '5px';
            input.style.borderRadius = '5px';
            divPrincipal.appendChild(input);
            if (i % 4 == 0)
                divPrincipal.appendChild(document.createElement('br'));
        }
    },
    comportamiento() {
        let valor = this.value;
        switch (valor) {
            case "0":
                if (calculadora.nuevoValorAnnadido) { //entra si nuevoValorAnnadido es true
                    inputMostrar.value = valor;
                    calculadora.nuevoValorAnnadido = false;
                } else if (inputMostrar.value != 0 || inputMostrar.value.includes("."))
                /*
                entra si:
                el valor de inputMostrar no es 0
                si inputMostrar incluye un . (decimal)
                */
                    inputMostrar.value += valor;
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if (inputMostrar.value == 0 && inputMostrar.value.length <= 1 || calculadora.nuevoValorAnnadido)
                /*
                entra si
                el valor de mostrar es 0 y el rango de mostrar no supera 1
                nuevoValorAnnadido es true
                */
                    inputMostrar.value = valor;
                else
                    inputMostrar.value += valor;
                calculadora.nuevoValorAnnadido = false;
                break;
            case "+/-":
                if (inputMostrar.value > 0)
                    inputMostrar.value = -Math.abs(inputMostrar.value);
                else
                    inputMostrar.value = Math.abs(inputMostrar.value);
                break;
            case "DEL":
                inputMostrar.value = inputMostrar.value.substring(0, inputMostrar.value.length - 1);
                if (inputMostrar.value == "")
                    inputMostrar.value = "0";
                break;
            case ",":
                if (!inputMostrar.value.includes(".")) //si no incluye . lo añade al input
                    inputMostrar.value += ".";
                break;
            case "CE":
                inputMostrar.value = 0;
                calculadora.valor1 = 0;
                calculadora.valor2 = 0;
                calculadora.resetearOperaciones();
                calculadora.operacionActual = false;
                calculadora.operacionPosterior = false;
                calculadora.primerNumero = true;
                break;
            case "+":
            case "-":
            case "X":
            case "/":
            case "%":
                if (calculadora.primerNumero) {
                    calculadora.valor1 = inputMostrar.value;
                    calculadora.operacionPosterior = valor;
                    console.log(calculadora.primerNumero);
                    calculadora.primerNumero = false;
                } else {
                    calculadora.valor2 = inputMostrar.value;
                    calculadora.realizarOperacion = true;
                    calculadora.operacionActual = calculadora.operacionPosterior;
                    calculadora.operacionPosterior = valor;
                }
                calculadora.asignarOperadores(calculadora.operacionActual);
                if (calculadora.realizarOperacion && !calculadora.nuevoValorAnnadido)
                    calculadora.comprobarOperacion(inputMostrar.value);
                calculadora.nuevoValorAnnadido = true;
                break;
            case "=":
                if (calculadora.operacionActual == false && calculadora.operacionPosterior != "+" || calculadora.operacionPosterior != "-" || calculadora.operacionPosterior != "X" || calculadora.operacionPosterior != "/")
                    calculadora.asignarOperadores(calculadora.operacionPosterior);
                calculadora.comprobarOperacion(inputMostrar.value);
                calculadora.nuevoValorAnnadido = true;
                break;
        }
    },
    resetearOperaciones() {
        calculadora.suma = false;
        calculadora.resta = false;
        calculadora.division = false;
        calculadora.multiplicacion = false;
        calculadora.porcentaje = false;
    },
    asignarOperadores(valor) {
        calculadora.resetearOperaciones();
        switch (valor) {
            case "+":
                calculadora.suma = true;
                break;
            case "-":
                calculadora.resta = true;
                break;
            case "X":
                calculadora.multiplicacion = true;
                break;
            case "/":
                calculadora.division = true;
                break;
            case "%":
                calculadora.porcentaje = true;
                break;
        }
    },
    calcularOperacion() {
        if (calculadora.suma) {
            inputMostrar.value = parseFloat(calculadora.valor1) + parseFloat(calculadora.valor2);
        } else if (calculadora.resta) {
            inputMostrar.value = parseFloat(calculadora.valor1) - parseFloat(calculadora.valor2);
        } else if (calculadora.multiplicacion) {
            inputMostrar.value = parseFloat(calculadora.valor1) * parseFloat(calculadora.valor2);
        } else if (calculadora.division) {
            inputMostrar.value = parseFloat(calculadora.valor1) / parseFloat(calculadora.valor2);
        } else {
            inputMostrar.value = (parseFloat(calculadora.valor1) * parseFloat(calculadora.valor2)) / 100;
        }
        calculadora.valor1 = inputMostrar.value;
        calculadora.valor2 = 0;
    },
    comprobarOperacion(valor) {
        if (calculadora.suma || calculadora.resta || calculadora.multiplicacion || calculadora.division || calculadora.porcentaje) {
            calculadora.valor2 = valor;
            calculadora.calcularOperacion();
        }
    }
}

//inicializamos el js con la función iniciar
window.addEventListener("DOMContentLoaded", iniciar);
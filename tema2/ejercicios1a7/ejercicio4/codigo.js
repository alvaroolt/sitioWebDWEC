let valores = [true, 5, false, "hola", "adios", 2];
console.log(valores);

// Determinar cual de los dos elementos de texto es mayor
// Si el resultado es true, el primer texto es mayor
let resultado = valores[3] > valores[4];
console.log(resultado);

//Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores
//necesarios para obtener un resultado true y otro resultado false
let valor1 = valores[0];
let valor2 = valores[2];
//Obtener un resultado TRUE (si uno de los dos es true, el resultado es true)
let resultado = valor1 || valor2;
console.log(resultado);
//Obtener un resultado FALSE (si uno de los dos es false, el resultado es false)
resultado = valor1 && valor2;
console.log(resultado);

//Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
let num1 = valores[1];
let num2 = valores[5];

let suma = num1 + num2;
console.log(suma);
let resta = num1 - num2;
console.log(resta);
let multiplicacion = num1 * num2;
console.log(multiplicacion);
let division = num1 / num2;
console.log(division);
let modulo = num1 % num2;
console.log(modulo);
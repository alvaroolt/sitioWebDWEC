console.log(comprobarPalindromo("La ruta nos aporto otro paso natural"));
console.log(comprobarPalindromo("Frase normal"));

function comprobarPalindromo(cadena) {

    let resultado = "La cadena \"" + cadena + "\" \n";
  
    // Paso la cadena a minúsculas y la almaceno en un array
    let cadenaMinus = cadena.toLowerCase();
    let arrayLetrasEspacios = cadenaMinus.split("");
  
    // Eliminar los espacios en blanco
    let arraySinEspacios = "";
    for(i in arrayLetrasEspacios) {
      if(arrayLetrasEspacios[i] != " ") {
        arraySinEspacios += arrayLetrasEspacios[i];
      }
    }

    let arrayLetras = arraySinEspacios.split("");
    let arrayLetrasReves = arraySinEspacios.split("").reverse();
  
    // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
    let iguales = true;
    for(i in arrayLetras) {
      if(arrayLetras[i] == arrayLetrasReves[i]) {
        // Si esta condición se cumple, significa que, de momento, ambos arrays contienen lo mismo, es decir, son iguales,
        // por eso entrar en esta parte de la condición no hace nada (en teoría)
      }
      else {
        // Si esta condición se cumple, quiere decir que los arrays no contienen lo mismo, por lo tanto, no son iguales y no son palíndromos
        iguales = false;
      }
    }
  
    if(iguales) {
      resultado += " es un palíndromo.";
    }
    else {
      resultado += " no es un palíndromo.";
    }
    return resultado;
}
console.log(mayusMinus("LOPERA DELEGADO"));
console.log(mayusMinus("hola mama, estoy escribiendo una cadena en minúsculas"));
console.log(mayusMinus("sería una pena que alguien escribiese en mayúsculas en tu texto con minúsculas... VERDAD??"));

function mayusMinus(cadena) {

    let string = "La cadena \""+cadena+"\" ";
    if(cadena == cadena.toUpperCase()) {
      string += " está formada por mayúsculas.";
    }
    else if(cadena == cadena.toLowerCase()) {
      string += " está formada por minúsculas.";
    }
    else {
      string += " está formada por mayúsculas y minúsculas.";
    }
  
    return string;
  }
window.onload = function () {// Necesito window.onload para mostrar los datos sobre los enlaces
  let info = document.getElementById("textos");
  let enlaces = document.getElementsByTagName("a");

  mostrarInfo();

  function mostrarInfo() {
    info.innerHTML = "Cantidad de enlaces: " + cantidadEnlaces() + "<br>Penúltimo enlace: " + obtenerPenultimoEnlace()
      + "<br>" + enlacesPrueba() + " apuntan a http://prueba" + "<br>Número de enlaces en el tercer párrafo: " + enlacesTercerParrafo();
  }

  // Numero de enlaces de la pagina
  function cantidadEnlaces() {
    //info.innerHTML = "Cantidad de enlaces: " + enlaces.length;
    return enlaces.length;
  }


  // Direccion del penultimo enlace
  function obtenerPenultimoEnlace() {
    let penultimoEnlace = enlaces[enlaces.length - 2].href;
    //info.innerHTML = info.innerHTML + "<br>Penúltimo enlace: " + penultimoEnlace;
    return penultimoEnlace;
  }

  // Numero de enlaces que apuntan a http://prueba
  function enlacesPrueba() {
    let contador = 0;
    for (let i = 0; i < enlaces.length; i++) {
      if (enlaces[i].href == "http://prueba/") {
        contador++;
      }
    }
    //info.innerHTML = info.innerHTML + "<br>" + contador + " enlaces apuntan a http://prueba"
    return contador;
  }


  // Numero de enlaces del tercer párrafo
  function enlacesTercerParrafo() {
    let parrafos = document.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a");//2 porque es un indice (0, 1 y 2)
    //info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = " + enlaces.length;
    return enlaces.length;
  }

}
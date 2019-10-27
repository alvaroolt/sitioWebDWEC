document.addEventListener("DOMContentLoaded", iniciar);

    function iniciar() {
        document.getElementById("link1").addEventListener("click", mostrarYOcultar);
        document.getElementById("link2").addEventListener("click", mostrarYOcultar);
        document.getElementById("link3").addEventListener("click", mostrarYOcultar);
    }

    function mostrarYOcultar() {
        let enlace = document.getElementById(this.id);
        let texto = document.getElementById('texto' + this.id.charAt(4));

        if (texto.style.display == "") {
            texto.style.display = "none";
            enlace.innerHTML = "Mostrar párrafo";
        } else {
            texto.style.display = "";
            enlace.innerHTML = "Ocultar párrafo";
        }
    }
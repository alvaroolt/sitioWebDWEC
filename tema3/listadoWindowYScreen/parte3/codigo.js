function iniciar() {
    let info = document.getElementById("info");
    info.innerHTML = "URL: " + location.href + "<br/>";
    info.innerHTML += "Protocolo: " + location.protocol + "<br/>";
    info.innerHTML += "Host: " + location.host + "<br/>";
    info.innerHTML += "Hostname: " + location.hostname + "<br/>";
    info.innerHTML += "Pathname: " + location.pathname + "<br/>";
    info.innerHTML += "Puerto: " + location.port + "<br/>";
    info.innerHTML += "Origen: " + location.origin + "<br/>";
    info.innerHTML += "Hash: " + location.hash + "<br/>";
}

window.addEventListener("load", iniciar);
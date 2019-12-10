function Gato(nombre, raza, peso, fechaNacimiento) {
    this.setNombre(nombre);
    this.setRaza(raza);
    this.setPeso(peso);
    this.setFechaNacimiento(fechaNacimiento);
}

//setters
Gato.prototype.setNombre = function (nombre) {
    if (nombre == "")
        throw new Error("El nombre no puede estar vacío");
    this.nombre = nombre;
}
Gato.prototype.setRaza = function (raza) {
    if (raza == "")
        throw new Error("La raza no puede estar vacía");
    this.raza = raza;
}
Gato.prototype.setPeso = function (peso) {
    if (!this.comprobarPesoValido(peso))
        throw new Error("El peso debe estar comprendido entre 1 y 15");
    this.peso = peso;
}
Gato.prototype.setFechaNacimiento = function (fechaNacimiento) {
    if (!this.comprobarFechaValida(fechaNacimiento))
        throw new Error("Fecha de nacimiento invalida");
    this.fechaNacimiento = new Date(fechaNacimiento);
}



Gato.prototype.comprobarFechaValida = function(fechaNacimiento){
    return fechaNacimiento != "" && new Date(fechaNacimiento) <= new Date() ;
}
Gato.prototype.comprobarVivo = function () {
    if (!this.comprobarPesoValido(this.peso))
        throw new Error(this.nombre+" ha muerto");
}
Gato.prototype.comprobarPesoValido = function (peso) {
    return peso >= 1 && peso <= 15 && peso != "";
}



Gato.prototype.jugar = function () {
    this.comprobarVivo();
    this.peso--;
    this.comprobarVivo();
}
Gato.prototype.comer = function () {
    this.comprobarVivo();
    this.peso++;
    this.comprobarVivo();
}
Gato.prototype.dormir = function(){
    this.comprobarVivo();
    return "Como me gusta dormir illo";
}



Gato.prototype.getFechaNacimiento = function () {
    return this.fechaNacimiento.getDate() + "/" + (this.fechaNacimiento.getMonth() + 1) + "/" + this.fechaNacimiento.getFullYear();
}
Gato.prototype.calcularEdad = function () {
    let hoy = new Date();
    let dia = hoy.getDate() - this.fechaNacimiento.getDate();
    let mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
    let annios = hoy.getFullYear() - this.fechaNacimiento.getFullYear();

    if (mes < 0 || (mes == 0 && dia < 0))
        annios--;
    if (annios == 0) {
        let meses = (hoy.getFullYear() - this.fechaNacimiento.getFullYear()) * 12;
        meses -= this.fechaNacimiento.getMonth();
        meses += hoy.getMonth();

        if (hoy.getDate() < this.fechaNacimiento.getDate())
            meses--;
        this.fechaNacimiento.setMonth(this.fechaNacimiento.getMonth() + meses);
        let dias = (hoy.getTime() - this.fechaNacimiento.getTime()) / (1000 * 60 * 60 * 24);
        dias = Math.floor(dias);
        return [meses, dias];

    }
    return annios;
}
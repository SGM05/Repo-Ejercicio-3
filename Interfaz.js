class Interfaz {
    constructor(listaVehiculos) {
        this.listaVehiculos = listaVehiculos
        this.misVehiculos = []
    }

    verVehiculosPorMarca(marca) {
        let copy = [...this.listaVehiculos]
        copy = copy.filter(function (vehiculo) {
            return vehiculo.marca === marca
        })
        copy.forEach(vehiculo => {
            console.log(vehiculo.marca)
        })
    }

    comprarVehiculos(vehiculo) {
        this.misVehiculos.push(vehiculo)
    }

    verMarcas() {


    }

    agregarVehiculo(vehiculo) {
        this.listaVehiculos.push(vehiculo)
    }
    verCarros() {
        console.log("Catalogo: " + this.archivos[this.indiceActual].modelo + "," + this.archivos[this.indiceActual].serie +
            "," + this.archivos[this.indiceActual].marca + "," + this.archivos[this.indiceActual].cilindraje +
            "," + this.archivos[this.indiceActual].numeroPasajeros + "," + this.archivos[this.indiceActual].tiempoGarantia +
            "," + this.archivos[this.indiceActual].valorImpuestos + "," + this.archivos[this.indiceActual].cajaCambios +
            "," + this.archivos[this.indiceActual].consumoGasolina + "," + this.archivos[this.indiceActual].tipoGasolina)

    }
    verMotos() {
        console.log("Catalogo: " + this.archivos[this.indiceActual].modelo + "," + this.archivos[this.indiceActual].serie +
            "," + this.archivos[this.indiceActual].marca + "," + this.archivos[this.indiceActual].cilindraje +
            "," + this.archivos[this.indiceActual].numeroPasajeros + "," + this.archivos[this.indiceActual].tiempoGarantia +
            "," + this.archivos[this.indiceActual].valorImpuestos + "," + this.archivos[this.indiceActual].cajaCambios +
            "," + this.archivos[this.indiceActual].consumoGasolina + "," + this.archivos[this.indiceActual].tipoGasolina)
    }
    comprarCarro() {


    }
    comprarMoto() {}


}

let interfaz

function setup() {
  createCanvas(300, 500)
  interfaz = new Interfaz(new Array)

  interfaz.agregarVehiculo(new Carros("carro", "serie", "BMW", "cilindraje", "numeroPasajeros", "tiempoGarantia", "valorImpuestos", "cajaCambios", "consumoGasolina", "tipoGasolina"))
  interfaz.agregarVehiculo(new Carros("carro", "serie", "Audi", "cilindraje", "numeroPasajeros", "tiempoGarantia", "valorImpuestos", "cajaCambios", "consumoGasolina", "tipoGasolina"))

  interfaz.agregarVehiculo(new Motos("moto", "serie", "Yamaha", "cilindraje", "numeroPasajeros", "tiempoGarantia", "valorImpuestos", "cajaCambios", "consumoGasolina", "tipoGasolina"))
  interfaz.agregarVehiculo(new Motos("moto", "serie", "Suzuki", "cilindraje", "numeroPasajeros", "tiempoGarantia", "valorImpuestos", "cajaCambios", "consumoGasolina", "tipoGasolina"))
  let opcion1 = window.prompt("Seleciona el tipo de vehículo: \n 1.Carros \n 2.Motos")

  switch (opcion1) {
    case "1":
      let opcion2 = window.prompt("Seleciona la marca de carro: \n 1.BMW \n 2.Audi \n 3.Toyota \n 4.Mazda")
      switch (opcion2) {
        case "1":
          interfaz.verVehiculosPorMarca("Kia")
          break

        case "2":
          interfaz.verVehiculosPorMarca("Chevrolet")
          break;
        case "3":
          interfaz.tipoVehiculo = "Ford"
          interfaz.verCarros(4024881, "S22", "escape", 2000, 6, "1 año", "3.500.000", "automatioa", "regular", "corriente")
          /*
          interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
*/
          break

        case "4":
          interfaz.tipoVehiculo = "Honda"
          interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")


      }
      break

    case "2":
      //interfaz.tipoVehiculo = "motos"
      interfaz.verVehiculos("motos")
      /*let opcion3 = window.prompt("Seleciona la marca de moto: \n 1.Yamaha \n 2.Honda \n 3.Suzuki \n 4.BMW")
      switch (opcion3) {

        case "1":
          interfaz.tipoVehiculo = "Auteco"
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")

          break

        case "2":
          interfaz.tipoVehiculo = "AKT"
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")

        case "3":
          interfaz.tipoVehiculo = "Dukati"
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")

          break

        case "4":
          interfaz.tipoVehiculo = "Kawasaki"
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          interfaz.verMotos(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos, "cajaCambios", consumoGasolina, "tipoGasolina")
          
          break
      }*/

      break


  }

  function draw() {
    background(0)
  }
}

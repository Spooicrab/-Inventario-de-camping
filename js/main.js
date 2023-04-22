/*   SEGUNDA PREENTREGA: 

  voy a añadir la opcion de alquilar objetos; Voy a añadir objetos a un array con las propiedades de stock, y el nombre del arrendatario como null hasta que sean alquilados, donde se modificara ese valor */

function objetosN(nombre, disponible, stock) {
  // creamos el metodo constructor de objetos
  this.nombre = nombre;
  this.disponible = disponible;
  this.stock = stock;
  Objetos.push(this);
}

// array de objetos vacío, iremos añadiendo usando el .push
let Objetos = [];

let objeto1 = new objetosN("Mesa", true, 4); // añadimos 3 Mesas

let objeto2 = new objetosN("CarpaGrande", true, 6); // añadimos 2 carpas grandes

let objeto3 = new objetosN("Silla", true, 5); // añadimos 2 sillas

let MesaAlquilada = objeto1.nombre;

let CarpaAlquilada = objeto2.nombre;

let SillaAlquilada = objeto3.nombre;

let alquilados = [];

function contarMesas(alquilados) {
  let contador = 0;
  console.log(alquilados, "contarMesas")
  for (let i = 0; i < alquilados.length; i++) {
    if (alquilados[i] === "Mesa") {
      contador++;
      
    }
  }
  return contador;
}

function contarSillas(alquilados) {
  let contador = 0;
  for (let i = 0; i < alquilados.length; i++) {
    if (alquilados[i]=== "Silla") {
      contador++;
    }
  }
  return contador;
}

function contarCarpas(alquilados) {
  let contador = 0;
  for (let i = 0; i < alquilados.length; i++) {
    if (alquilados[i]=== "CarpaGrande") {
      contador++;
    }
  }
  return contador;
}

let MesaContador = 0;

let SillasContador = 0;

let CarpasContador = 0;

let EspacioDisponible = 40; //esto sera usado para añadir carpas

function NuevoIngreso(CarpaGrande, CarpaChica) {
  return CarpaGrande * 2 + CarpaChica;
}
let loop = true;
while (loop == true) {
  //Bucle for para que poder reingresar al menu principal
  option = parseInt(
    prompt(
      "¿Qué opción deseas elegir??\n 1. Nuevo Ingreso \n 2. Espacio Disponible \n 3.Alquilar objetos \n 4. Mostrar Objetos Alquilados \n 9. Salir"
    ) //Aqui se podrá navegar por las distintas opciones
  );

  switch (option) {
    case 1: //Nuevo Ingreso de carpas, se puede agregar grandes y chicas. En caso de que vengan familias con distintos tipos de carpa se podrá ingresarlos sin tener que salir y volver a entrar al menú usando la opcion de ingreso multiple.
      if (EspacioDisponible == 0) {
        //En caso de estar llenos, no se habilitará nuevos ingresos

        alert("Estamos llenos!");
        break;
      }

      let NIngreso = parseInt(
        //aqui podras elegir que tipos de carpas entrarán; solo chicas/solo grandes o ambas "mixeadas"
        prompt(
          "¿Qué tipo de ingreso? \n 1. Ingreso de Tipo Unico. \n 2. Multiple Tipo de Carpas. \n 9. Salir"
        )
      );

      if (NIngreso == 1) {
        //Ingreso tipo unico

        let Ingreso = parseInt(
          prompt("Qué tipo de carpa? \n 1. Carpa Grande. \n 2. Carpa Chica.")
        ); //elegimos el tipo de carpa

        if (Ingreso == 1) {
          //ingresamos cuantas
          let CarpaGrande = parseInt(prompt("Ingrese cantidad de Carpas"));

          let CarpaChica = 0;

          let Resultado = NuevoIngreso(CarpaGrande, CarpaChica);

          if (Resultado == EspacioDisponible) {
            // aqui seteamos el espacio disponible en 0 para volver al menu principal y cerrar el programa manualmente; no se habilitaran mas ingresos
            alert("Ingreso Exitoso, No hay mas espacio Disponible");

            EspacioDisponible = 0;
            break;
          } else if (Resultado > EspacioDisponible) {
            //No hay tanto lugar, volviendo al menu principal

            alert(
              "No hay espacio suficiente para el valor ingresado, Por favor Revise el espacio Disponible"
            );
            break;
          } else if (Resultado < EspacioDisponible) {
            alert("Ingreso exitoso!"); //El ingreso fue exitoso y se puede seguir ingresando carpas. El espacio disponible es almacenado y se sigue corriendo el programa con este dato presente

            EspacioDisponible = EspacioDisponible - Resultado;
            break;
          } else {
            alert("Error!");

            Ingreso = 1; //Vuelve a intentarlo
          }
        } else if (Ingreso == 2) {
          let CarpaChica = parseInt(prompt("Ingrese cantidad de Carpas"));

          let CarpaGrande = 0;

          let Resultado = NuevoIngreso(CarpaGrande, CarpaChica);

          if (Resultado == EspacioDisponible) {
            //llenamos, volvemos al menu principal

            alert("Ingreso Exitoso, No hay mas espacio Disponible");

            EspacioDisponible = 0;

            break;
          } else if (Resultado > EspacioDisponible) {
            //No hay tanto lugar

            alert(
              "No hay espacio suficiente para el valor ingresado, Por favor Revise el espacio Disponible"
            );

            break; //Para volver al menu principal
          } else if (Resultado < EspacioDisponible) {
            alert("Ingreso exitoso!");

            EspacioDisponible = EspacioDisponible - Resultado;

            break; //Para volver al menu principal
          } else {
            alert("Error!");

            Ingreso = 2; //Vuelve a intentarlo
          }

          break;
        } else {
          alert("Error!");

          Ingreso = 1;
        }
      } else if (NIngreso == 2) {
        // Aquí se podran ingresar varias carpas de ambos tipos

        let CarpaGrande = parseInt(
          prompt("Ingrese la Cantidad de Carpas Grandes")
        );

        let CarpaChica = parseInt(
          prompt("Ingrese la Cantidad de Carpas Chicas")
        );

        let Resultado = NuevoIngreso(CarpaGrande, CarpaChica);

        if (Resultado == EspacioDisponible) {
          //llenos, volvemos al menu principal

          alert("Ingreso Exitoso, No hay mas espacio Disponible");

          EspacioDisponible = 0;

          break;
        } else if (Resultado > EspacioDisponible) {
          //No hay tanto lugar

          alert(
            "No hay espacio suficiente para el valor ingresado, Por favor Revise el espacio Disponible"
          );

          break; //Para volver al menu principal
        } else if (Resultado < EspacioDisponible) {
          alert("Ingreso exitoso!");

          EspacioDisponible = EspacioDisponible - Resultado;

          break; //Para volver al menu principal
        } else {
          alert("Error!");

          NIngreso = 2; //Vuelve a intentarlo
        }
      } else {
        alert("--Error-- \n Volviendo al menú Principal.");

        break;
      }
      break;

    case 2: //Aqui se vera cuanto espacio disponible hay para nuevos ingresos
      if (EspacioDisponible == 0) {
        //En caso de estar llenos, no se habilitará nuevos ingresos

        alert("Estamos llenos!");
      }

      let ChicaDisp = Math.ceil(EspacioDisponible / 4);

      let GrandeDisp = Math.floor(EspacioDisponible / 2);

      alert(
        "Hay espacio para " +
          GrandeDisp +
          " Carpas Grandes y para " +
          ChicaDisp +
          " Carpas chicas"
      ); //aqui mostramos caunto espacio hay para carpas grandes Y chicas;

      let EspacioNav = parseInt(
        //aqui podremos elegir cuanto espacio disponible hay para carpas grandes O chicas
        prompt(
          "Elija una opción. \n 1. Ver espacio disponible solo para Carpas chicas \n 2. Ver espacio disponible solo para Carpas Grandes"
        )
      );

      switch (EspacioNav) {
        case 1:
          alert("Hay espacio para " + EspacioDisponible + " Carpas chicas.");

          break;

        case 2:
          alert("Hay espacio para " + GrandeDisp + " Carpas Grandes.");

          break;

        default:
          alert("Ingrese una opcion valida");
      }

      break;

    case 3: // crear array con objetos a alquilar, usando un metodo constructor de objetos dentro de un array para poder verificar si hay stock disponible para alquilar
      //Alquileres

      const objetoindex = parseInt(
        parseInt(
          prompt("¿Qué desea alquilar? \n 1. Mesa\n 2. Carpa Grande\n 3. Silla")
        )
      );
      const objeto = Objetos[objetoindex - 1];
      if (objeto.disponible) {
        let Nstock = prompt(
          "¿Cuántos desea alquilar? Hay " +
            objeto.stock +
            " unidades disponibles"
        );
        if (Nstock <= objeto.stock) {
          // verifica si hay suficientes unidades disponibles
          objeto.stock -= Nstock;
          objeto.disponible = objeto.stock > 0; // actualiza el valor de la disponibilidad según el stock

          switch (objetoindex) {
            case 1:
              for (var i = 1; i <= Nstock; i++) {
                alquilados.push(MesaAlquilada);
                console.log(alquilados);
              }
              break;

            case 2:
              for (var i = 1; i <= Nstock; i++) {
                alquilados.push(CarpaAlquilada);
                console.log(alquilados);
              }
              break;

            case 3:
              for (var i = 1; i <= Nstock; i++) {
                alquilados.push(SillaAlquilada);
                console.log(alquilados);
              }
              break;
          }
          alert("¡Alquiler realizado con éxito!");

          //crear un array que añada el objeto alquilado a un array deo bjetos alquilados

          break;
        } else {
          alert("Lo siento, no hay suficientes unidades disponibles.");
          break;
        }
      } else {
        alert("Lo siento, este objeto no está disponible para alquilar.");
        break;
      }

    case 4:
      let MesaContador = contarMesas(alquilados);

      let SillasContador = contarSillas(alquilados);

      let CarpasContador = contarCarpas(alquilados);

      alert(
        "Sea han alquilado [" +
          MesaContador +
          "] Mesas, [" +
          CarpasContador +
          "] Carpas Grandes y [" +
          SillasContador +
          "] Sillas"
      );
      break;

    case 9: //al ingresar "9", el bucle termina y se cierra
      alert("Adios");
      loop = false;
      break;

    default: //en caso de ingresar algun otro valor, se volvera al menu principal.
      alert("Opción inválida.");
  }
}

//Alquileres

//test 1

//test 2

/* PRIMERA PREENTREGA:
  Este programa esta pensado para ser utulizado en un camping; consta de un ciclo while para crear el menú interactivo y un switch para navegar en las opciones del mismo, tambien se usa un par de if/else en algunos casos
  El programa calcula la capacidad disponible de un camping donde ingresan carpas chicas y grandes (estas ultimas ocupan el doble de espacio); para esto, se usan funciones varias 
  El programa permite ingresar de una sola vez varias carpas, ya sean estas del mismo tipo (grandes o chicas) o, de distinto tipo.
  Por ultimo, también el programa permite ver cuantas carpas pueden seguir ingresando
  Cuando el camping está lleno, no se permite el ingreso de mas carpas.
*/

/*   SEGUNDA PREENTREGA: 
Para la segunda entrega, agrego los case 3 y 4 al menú interactivo con la función para alquilar objetos.
En el case 3, se usa un array de objetos disponibles pára ser alquilados con propiedades varias. Según estas propiedades (stock por ejemplo) el usuario podrá o no alquilar el objeto seleccionado vía prompt.
En caso de que el objeto pueda ser alquilado, se añade el nombre del objeto alquilado a un arra de objetos alquilados para luego, con el case 4, poder visualizar cuantos objetos fueron alquilados de los 3 tipos disponibles (Mesas, Sillas, Carpas)
 
*/

function objetosN(nombre, disponible, stock) {
  // creamos el metodo constructor de objetos;
  this.nombre = nombre;
  this.disponible = disponible;
  this.stock = stock;
  Objetos.push(this);
}

let Objetos = []; //Aquí se almacenará los objetos que serán alquilados

let objeto1 = new objetosN("Mesa", true, 4); // añadimos 4 Mesas;

let objeto2 = new objetosN("CarpaGrande", true, 6); // añadimos 6 carpas grandes;

let objeto3 = new objetosN("Silla", true, 5); // añadimos 5 sillas;

let MesaAlquilada = objeto1.nombre;

let CarpaAlquilada = objeto2.nombre;

let SillaAlquilada = objeto3.nombre;

//Estas ultimas 3 variables son las que seran añadidas al array: alquilados [];

let alquilados = [];

function contarMesas(alquilados) {
  let contador = 0;
  console.log(alquilados, "contarMesas");
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
    if (alquilados[i] === "Silla") {
      contador++;
    }
  }
  return contador;
}

function contarCarpas(alquilados) {
  let contador = 0;
  for (let i = 0; i < alquilados.length; i++) {
    if (alquilados[i] === "CarpaGrande") {
      contador++;
    }
  }
  return contador;
}

//Estas 3 funciones son usadas para contar cuanto de cual objeto fueron alquilados

let MesaContador = 0;

let SillasContador = 0;

let CarpasContador = 0;

let EspacioDisponible = 40; //Esto sera usado para añadir carpas

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
    case 1: //Nuevo Ingreso de carpas, se puede agregar grandes y chicas.
      if (EspacioDisponible == 0) {
        alert("Estamos llenos!"); //En caso de estar llenos, no se habilitará nuevos ingresos
        break;
      }

      let NIngreso = parseInt(
        prompt(
          "¿Qué tipo de ingreso? \n 1. Ingreso de Tipo Unico. \n 2. Multiple Tipo de Carpas. \n 9. Salir" //Aqui podras elegir que tipos de carpas entrarán; solo chicas/solo grandes o ambas "mixeadas"
        )
      );
      //Ingreso tipo unico:
      if (NIngreso == 1) {
        let Ingreso = parseInt(
          prompt("Qué tipo de carpa? \n 1. Carpa Grande. \n 2. Carpa Chica.") //Elegimos el tipo de carpa
        );

        if (Ingreso == 1) {
          let CarpaGrande = parseInt(prompt("Ingrese cantidad de Carpas"));

          let CarpaChica = 0;

          let Resultado = NuevoIngreso(CarpaGrande, CarpaChica);

          if (Resultado == EspacioDisponible) {
            alert("Ingreso Exitoso, No hay mas espacio Disponible"); // Aqui seteamos el espacio disponible en 0 para volver al menu principal y cerrar el programa manualmente; No se habilitaran mas ingresos.

            EspacioDisponible = 0;

            break;
          } else if (Resultado > EspacioDisponible) {
            alert(
              "No hay espacio suficiente para el valor ingresado, Por favor Revise el espacio Disponible" //No hay tanto lugar, volviendo al menu principal
            );
            break;
          } else if (Resultado < EspacioDisponible) {
            alert("Ingreso exitoso!"); //El ingreso fue exitoso y se puede seguir ingresando carpas. El espacio disponible es almacenado y se sigue corriendo el programa con este dato presente

            EspacioDisponible = EspacioDisponible - Resultado;

            break;
          } else {
            alert("Error!");

            Ingreso = 1;
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
          alert("Ingreso Exitoso, No hay mas espacio Disponible"); //Llenos, volvemos al menu principal

          EspacioDisponible = 0;

          break;
        } else if (Resultado > EspacioDisponible) {
          //No hay tanto lugar

          alert(
            "No hay espacio suficiente para el valor ingresado, Por favor Revise el espacio Disponible"
          );

          break;
        } else if (Resultado < EspacioDisponible) {
          alert("Ingreso exitoso!");

          EspacioDisponible = EspacioDisponible - Resultado;

          break;
        } else {
          alert("Error!");

          NIngreso = 2;
        }
      } else {
        alert("--Error! \n Volviendo al menú Principal.");

        break;
      }
      break;

    case 2: //Aqui se vera cuanto espacio disponible hay para nuevos ingresos
      if (EspacioDisponible == 0) {
        //En caso de estar llenos, se cierra aquí

        alert("Estamos llenos!");
      }

      let ChicaDisp = Math.ceil(EspacioDisponible / 4);

      let GrandeDisp = Math.floor(EspacioDisponible / 2);

      //Usé para redondear abajo y arriba para que el usuario pueda dar un "vistazo rapido" a los espacios

      alert(
        "Hay espacio para " +
          GrandeDisp +
          " Carpas Grandes y para " +
          ChicaDisp +
          " Carpas chicas"
      );

      let EspacioNav = parseInt(
        prompt(
          "Elija una opción. \n 1. Ver espacio disponible solo para Carpas chicas \n 2. Ver espacio disponible solo para Carpas Grandes" //aqui podremos elegir mostrar cuanto espacio disponible hay para carpas grandes O chicas
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

    case 3: //Aquí entramos en la segunda pre-entrega; comenzamos a usar arrays, objetos y arrays de objetos con propiedades;
      const objetoindex = parseInt(
        parseInt(
          prompt("¿Qué desea alquilar? \n 1. Mesa\n 2. Carpa Grande\n 3. Silla")
        )
      );
      const objeto = Objetos[objetoindex - 1]; //Aquí el usuario podra elegir que objeto alquilará
      if (objeto.disponible) {
        let Nstock = prompt(
          "¿Cuántos desea alquilar? Hay " +
            objeto.stock +
            " unidades disponibles"
        );
        if (Nstock <= objeto.stock) {
          objeto.stock -= Nstock;
          objeto.disponible = objeto.stock > 0; // Aqui se actualiza el stock despues de que el objeto sea alquilado y según cuantos fueron alquilados

          switch (
            objetoindex //este switch lo que hace es añadir al array: alquilados[] el nombre del objeto que fue alquilado y, con un ciclo for, podemos pushear el numero de objetos que fueron alquilados para el caso de que se alquilen 2 objetos iguales
          ) {
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

          break;
        } else {
          alert("Lo siento, no hay suficientes unidades disponibles.");
          break;
        }
      } else {
        alert("Lo siento, este objeto no está disponible para alquilar.");
        break;
      }

    case 4: //Aquí, contamos cuantos objetos alquilamos de los 3 tipos que hay disponibles y los mostramos
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

    case 9:
      alert("Adios!");
      loop = false;
      break;

    default:
      alert("Opción inválida.");
  }
}

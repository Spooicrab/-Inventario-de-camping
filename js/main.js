// Definiciones
let menu = 0;

let EspacioDisponible = 40;

function NuevoIngreso(CarpaGrande, CarpaChica) {
  return CarpaGrande * 2 + CarpaChica;
}

for (menu = 0; menu <= 2; ) {
  //Bucle for para que poder reingresar al menu principal
  option = parseInt(
    prompt(
      "¿Qué opción deseas elegir??\n 1. Nuevo Ingreso \n 2. Espacio Disponible \n 9. Salir"
    ) //Aqui se podrá navegar por las distintas opciones
  );

  switch (option) {
    case 1: //Nuevo Ingreso de carpas, se puede agregar grandes y chicas. En caso de que vengan familias con distintos tipos de carpa se podrá ingresarlos sin tener que salir y volver a entrar al menú usando la opcion de ingreso multiple.
      if (EspacioDisponible == 0) {
        //En caso de estar llenos, no se habilitará nuevos ingresos

        alert("Estamos llenos!");

        menu = 1;
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

            menu = 0;
          } else if (Resultado > EspacioDisponible) {
            //No hay tanto lugar, volviendo al menu principal

            alert(
              "No hay espacio suficiente para el valor ingresado, Por favor Revise el espacio Disponible"
            );

            menu = 0;
          } else if (Resultado < EspacioDisponible) {
            alert("Ingreso exitoso!"); //El ingreso fue exitoso y se puede seguir ingresando carpas. El espacio disponible es almacenado y se sigue corriendo el programa con este dato presente

            menu = 0;

            EspacioDisponible = EspacioDisponible - Resultado;
          } else {
            alert("Error!");

            Ingreso = 1; //Vuelve a intentarlo
          }

          menu = 1;
        } else if (Ingreso == 2) {
          let CarpaChica = parseInt(prompt("Ingrese cantidad de Carpas"));

          let CarpaGrande = 0;

          let Resultado = NuevoIngreso(CarpaGrande, CarpaChica);

          if (Resultado == EspacioDisponible) {
            //llenamos, volvemos al menu principal

            alert("Ingreso Exitoso, No hay mas espacio Disponible");

            EspacioDisponible = 0;

            menu = 1;
          } else if (Resultado > EspacioDisponible) {
            //No hay tanto lugar

            alert(
              "No hay espacio suficiente para el valor ingresado, Por favor Revise el espacio Disponible"
            );

            menu = 1; //Para volver al menu principal
          } else if (Resultado < EspacioDisponible) {
            alert("Ingreso exitoso!");

            EspacioDisponible = EspacioDisponible - Resultado;

            menu = 1; //Para volver al menu principal
          } else {
            alert("Error!");

            Ingreso = 2; //Vuelve a intentarlo
          }

          menu = 1;
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

          menu = 1;
        } else if (Resultado > EspacioDisponible) {
          //No hay tanto lugar

          alert(
            "No hay espacio suficiente para el valor ingresado, Por favor Revise el espacio Disponible"
          );

          menu = 1; //Para volver al menu principal
        } else if (Resultado < EspacioDisponible) {
          alert("Ingreso exitoso!");

          EspacioDisponible = EspacioDisponible - Resultado;

          menu = 1; //Para volver al menu principal
        } else {
          alert("Error!");

          NIngreso = 2; //Vuelve a intentarlo
        }
      } else {
        alert("--Error-- \n Volviendo al menú Principal.");

        menu = 1;
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

      let EspacioNav = parseInt( //aqui podremos elegir cuanto espacio disponible hay para carpas grandes O chicas
        prompt(
          "Elija una opción. \n 1. Ver espacio disponible solo para Carpas chicas \n 2. Ver espacio disponible solo para Carpas Grandes"
        )
      );

      switch (EspacioNav) {
        case 1:
          alert("Hay espacio para " + EspacioDisponible + " Carpas chicas.");

          menu = 1;

          break;

        case 2:
          alert("Hay espacio para " + GrandeDisp + " Carpas Grandes.");

          menu = 1;

          break;

        default:
          alert("Ingrese una opcion valida");

          menu = 1;
      }

      break;

    case 9: //al ingresar "9", el bucle termina y se cierra.
      menu = 3;
      alert("Adios");
      break;

    default: //en caso de ingresar algun otro valor, se volvera al menu principal.
      alert("Opción inválida.");
      2;

      menu = 1;
  }
}

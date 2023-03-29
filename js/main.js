// Definiciones
let menu = 0;

let EspacioDisponible = 40;

function NuevoIngreso(CarpaGrande, CarpaChica) {
  return CarpaGrande * 2 + CarpaChica;
}

for (menu = 0; menu <= 2; ) {
  option = parseInt(
    prompt(
      "¿Qué opción deseas elegir??\n 1. Nuevo Ingreso \n 2. Espacio Disponible \n 9. Salir"
    )
  );

  switch (option) {
    case 1: //Nuevo Ingreso de carpas, se puede agregar grandes y chicas. En caso de que vengan familias con distintos tipos de carpa se podrá ingresarlos sin tener que salir y volver a entrar al menú usando la opcion de ingreso multiple.
      if (EspacioDisponible == 0) {
        //En caso de estar llenos, no se habilitará nuevos ingresos

        alert("Estamos llenos!");

        menu = 1;
      }

      let NIngreso = parseInt(
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
          let CarpaGrande = parseInt(prompt("Ingrese cantidad de Carpas"));

          let CarpaChica = 0;

          let Resultado = NuevoIngreso(CarpaGrande, CarpaChica);

          if (Resultado == EspacioDisponible) {
            alert("Ingreso Exitoso, No hay mas espacio Disponible");

            EspacioDisponible = 0;

            menu = 0;
          } else if (Resultado > EspacioDisponible) {
            //No hay tanto lugar

            alert(
              "No hay espacio suficiente para el valor ingresado, Por favor Revise el espacio Disponible"
            );

            menu = 0;
          } //Para volver al menu principal
          else if (Resultado < EspacioDisponible) {
            alert("Ingreso exitoso!");

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

          Ingreso = 1; //Vuelve a intentarlo
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

    case 2: //ver espacios
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
      );

      let EspacioNav = parseInt(
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

      // Aquí iría el código para agregar un producto

      break;

    case 9:
      menu = 3;
      alert("Adios");
      break;

    default:
      alert("Opción inválida.");
      2;

      menu = 1;
  }
}

// Creamos una variable "opcion" y la inicializamos en cero
let option = 0;
let EspacioDisponible= 40;
function NuevoIngreso(CarpaGrande, CarpaChica){
  return (CarpaGrande*2) + CarpaChica;}

// Creamos un bucle "while" para que el menú se muestre una y otra vez hasta que el usuario decida salir
while (option == 0) {
// Mostramos el menú en un prompt y almacenamos la opción elegida por el usuario
  option = parseInt(prompt("¿Qué opción deseas elegir??\n 1. Nuevo Ingreso \n 2. Espacio Disponible \n 9. Salir"));

switch (option) {
    case 1:   //Nuevo Ingreso de carpas, se puede agregar grandes y chicas. En caso de que vengan familias con distintos tipos de carpa se podrá ingresarlos sin tener que salir y volver a entrar al menú usando la opcion de ingreso multiple.
      if(EspacioDisponible ==0){//En caso de estar llenos, no se habilitará nuevos ingresos
        alert("Estamos llenos!");
        
      }
      let NIngreso= parseInt(prompt("¿Qué tipo de ingreso? \n 1. Ingreso de Tipo Unico. \n 2. Multiple Tipo de Carpas. \n 9. Salir"));       
      if (NIngreso== 1) //Ingreso tipo unico
    {
    let Ingreso= parseInt(prompt("Qué tipo de carpa? \n 1. Carpa Grande. \n 2. Carpa Chica."));
    //elegimos el tipo de carpa
     if (Ingreso==1){        
      let CarpaGrande= parseInt(prompt("Ingrese cantidad de Carpas"));      
      let CarpaChica=0;
      let Resultado=NuevoIngreso(CarpaGrande, CarpaChica);
      if (Resultado == EspacioDisponible){ //llenamos, volvemos al menu principal
        alert("Ingreso Exitoso, No hay mas espacio Disponible");
        EspacioDisponible=0;
        option= 0;} //aunque pongo option 0, no me devuelve al menu principal
      else if (Resultado > EspacioDisponible){  //No hay tanto lugar
        alert("No hay espacio suficiente para el valor ingresado, Por favor Revise el espacio Disponible");
        option= 0; //Para volver al menu principal 
      }
      else if(Resultado < EspacioDisponible){
        alert("Ingreso exitoso!"); 
        option = "0";
        EspacioDisponible= EspacioDisponible - Resultado;
         //Para volver al menu principal 
      }
      else{
        alert("Error!");
        option= 1; //Vuelve a intentarlo
      }
    option= 0;
    }
        else if (Ingreso==2){
          let CarpaChica= parseInt(prompt("Ingrese cantidad de Carpas"));      
          let CarpaGrande=0;
          let Resultado=NuevoIngreso(CarpaGrande, CarpaChica);
          if (Resultado == EspacioDisponible){ //llenamos, volvemos al menu principal
            alert("Ingreso Exitoso, No hay mas espacio Disponible");
            EspacioDisponible=0;
            option= 0;} //aunque pongo option 0, no me devuelve al menu principal
          else if (Resultado > EspacioDisponible){  //No hay tanto lugar
            alert("No hay espacio suficiente para el valor ingresado, Por favor Revise el espacio Disponible");
            option= 0; //Para volver al menu principal 
          }
          else if(Resultado < EspacioDisponible){
            alert("Ingreso exitoso!"); 
            EspacioDisponible= EspacioDisponible - Resultado;
            option = 0; //Para volver al menu principal 
          }
          else{
            alert("Error!");
            option= 1; //Vuelve a intentarlo
          }
        option=0;
      }
    }    
    else if (NIngreso== 2)
    {  alert("IUCc") }
    //otro ingreso
          
    else{
          alert("--Error-- \n Volviendo al menú Principal.");
          option = 0;
        }
    break;
    //fin de ingresos
    /* else if (NIngreso== 2){ alert(null) } //ingreso multiple
        
      else {
          alert ("Volviendo al menu principal.")
          let option = 0
        }
      
      break; */
    case 2: //ver esopacios
      alert("VER ESPACIOS");
      // Aquí iría el código para agregar un producto
      break;
    case 9:
      alert('¡Adiós!');
      break;
    default:
      alert('Opción inválida.');
      option = 0;
    }

}
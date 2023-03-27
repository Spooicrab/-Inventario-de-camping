// Creamos una variable "opcion" y la inicializamos en cero
let option = 0;
let EspacioDisponible= 40;
// Creamos un bucle "while" para que el menú se muestre una y otra vez hasta que el usuario decida salir
while (option == 0) {
  // Mostramos el menú en un prompt y almacenamos la opción elegida por el usuario
  option = parseInt(prompt(`¿Qué opción deseas elegir?
  1. Nuevo Ingreso
  2. Espacio Disponible
  9. Salir`));
  // Dependiendo de la opción elegida, ejecutamos una acción diferente
  switch (option) {
    case 1:
      
      let Ingreso= prompt("¿Qué tipo de ingreso? \n 1. Ingreso de Tipo Unico. \n 2. Multiple Tipo de Carpas. \n 9. Salir");
      
        if (Ingreso== 1){
          let CarpaChica= 0;
          let CarpaGrande= 0;
          
          let Ingreso= prompt("Qué tipo de carpa? \n 1. Carpa Grande. \n 2. Carpa Chica.");
            if (Ingreso==1){
            let CarpaGrande= prompt("Ingrese cantidad de carpas.");
            
          }
        } 
        else if (Ingreso== 2){
          

        }
        
        else {
          alert ("Volviendo al menu principal.")
          let option = 0
        }
      // Aquí iría el código para mostrar la lista de productos
      break;
    case 2:
      console.log('Agregar producto:');
      // Aquí iría el código para agregar un producto
      break;
    case 9:
      console.log('¡Adiós!');
      break;
    default:
      console.log('Opción inválida.');
  }
}
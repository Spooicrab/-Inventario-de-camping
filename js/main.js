// Creamos una variable "opcion" y la inicializamos en cero
let option = 0;

// Creamos un bucle "while" para que el menú se muestre una y otra vez hasta que el usuario decida salir
while (option == 0) {
  // Mostramos el menú en un prompt y almacenamos la opción elegida por el usuario
  option = parseInt(prompt(`¿Qué opción deseas elegir?
  1. Ver lista de productos
  2. Agregar producto
  3. Eliminar producto
  4. Salir`));
  
  // Dependiendo de la opción elegida, ejecutamos una acción diferente
  switch (option) {
    case 1:
      console.log('Lista de productos:');
      // Aquí iría el código para mostrar la lista de productos
      break;
    case 2:
      console.log('Agregar producto:');
      // Aquí iría el código para agregar un producto
      break;
    case 3:
      console.log('Eliminar producto:');
      // Aquí iría el código para eliminar un producto
      break;
    case 4:
      console.log('¡Hasta luego!');
      break;
    default:
      console.log('Opción inválida. Introduce un número del 1 al 4.');
  }
}
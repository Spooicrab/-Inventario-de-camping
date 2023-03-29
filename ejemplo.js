let savedPIN = "1724";
//funcion
function login() {
  let access = false;

  for (let i = 2; i >= 0; i--) {
    let userPIN = prompt(
      "Ingresa tu PIN. Tienes " + (i + 1) + " oportunidades."
    );
    if (userPIN === savedPIN) {
      alert("Ingreso exitoso. Bienvenido/a");
      access = true;
      break;
    } else {
      alert("Error. Te quedan " + i + " intentos.");
    }
  }

  return access;
}

//condicional
if (login()) {
  let saldo = 200000;

  let option = prompt(
    "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
  );
  //ciclo
  while (option != "X" && option != "x") {
    //opciones de menu de cajero
    {
      if (option == "1") {
        alert("Tu saldo es $ " + saldo);
      } else if (option == "2") {
        let retirotr5 = parseInt(prompt("Ingresa cantidad a retirar"));
        if (retiro <= saldo) {
          saldo = saldo - retiro;
          //  saldo -= retiro;
          alert("Retiro exitoso. Tu nuevo saldo es $ " + saldo);
        } else {
          alert("Fondos insuficientes");
        }
      } else if (option == "3") {
        let deposito = parseInt(prompt("Ingresa monto a depositar"));
        saldo += deposito;
        alert("Depósito exitoso. Tu nuevo saldo es $ " + saldo);
      } else {
        alert("Elegiste una opción inválida");
      }
    }

    option = prompt(
      "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n Presioná X para finalizar."
    );
  }
} else {
  alert("Retendremos tu tarjeta por seguridad");
}

alert("Adiós");

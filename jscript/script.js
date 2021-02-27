function permitirEnviar() {
  var checkBox = document.getElementById("privacidad");

  if (checkBox.checked == true) {
    document.getElementById("botonSend").disabled = false;
    document.getElementById("botonSend").style.backgroundColor =
      "rgb(68, 73, 114)";
  } else {
    document.getElementById("botonSend").style.backgroundColor =
      "rgb(127, 128, 131)";
    document.getElementById("botonSend").disabled = true;
  }
}

function resetbackg() {
  document.getElementById("botonSend").style.backgroundColor =
    "rgb(127, 128, 131)";
}


function validar() {
  var nombre, apellidos, telefono, email, expresion;

  nombre = document.getElementById("nombre").value;
  apellidos = document.getElementById("apellidos").value;
  telefono = document.getElementById("telefono").value;
  email = document.getElementById("email").value;

  expresion = /\w+@\w+\.[a-z]/;

  if (nombre == "" || apellidos == "" || telefono == "" || email == "") {
    alert("Debes rellenar todos los campos");
    return false;
  } else if (nombre.length > 30) {
    alert("El nombre es demasiado largo");
    return false;
  } else if (apellidos.length > 30) {
    alert("Los apellidos son demasiado largos");
    return false;
  } else if (isNaN(telefono)) {
    alert("El campo teléfono solo acepta caracteres numéricos");
    return false;
  } else if (telefono.length != 9) {
    alert("Tu número de teléfono debe contener 9 cifras");
    return false;
  } else if (!expresion.test(email)) {
    alert("El formato del correo no es válido");
    return false;
  }
}

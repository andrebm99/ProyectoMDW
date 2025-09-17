function formulario() {
  document.getElementById("miModal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("miModal").style.display = "none";
  alert("Se cerró el formulario.");
}

function botonFormulario() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  alert("Mensaje: Hola, " + nombre + " te contactaré a tu correo '" + correo + "'");
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}


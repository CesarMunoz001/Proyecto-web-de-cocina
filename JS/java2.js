let temporizador;

function mostrarSesionCaducada() {
  setTimeout(function() {
    window.location.href = 'sesioncaducada.html';
  }, 5 * 1000); // tiempo
}

function reiniciarTemporizador() {
  clearTimeout(temporizador);
  temporizador = setTimeout(mostrarSesionCaducada, 5 * 1000); // tempo
}

document.addEventListener('mousemove', reiniciarTemporizador);
document.addEventListener('keypress', reiniciarTemporizador);

window.onload = function() {
  reiniciarTemporizador();
}

document.getElementById("cerrarSesionBtn").addEventListener("click", function() {
  cerrarSesion();
});

function cerrarSesion() {
  window.location.href = 'inicio.html';
}

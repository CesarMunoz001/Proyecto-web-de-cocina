document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    let attempts = 0;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Datos de inicio de sesión correctos
        const correctUsername = 'usuario1';  // Cambia esto al usuario correcto
        const correctPassword = '1234';  // Cambia esto a la contraseña correcta
        
        if (username === correctUsername && password === correctPassword) {
            window.location.href = 'index.html';  // Redirige a inicio.html
        } else {
            attempts++;
            if (attempts >= 3) {
                window.location.href = 'sesioncaducada.html';  // Redirige a sesioncaducada.html
            } else {
                alert('Usuario o contraseña incorrectos. Intento ' + attempts + ' de 3.');
            }
        }
    });
});
document.getElementById('rememberBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`usuario1: ${username}\n1234: ${password}`);
});

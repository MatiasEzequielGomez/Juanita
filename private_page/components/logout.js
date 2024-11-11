document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function() {
        const logOutButton = document.getElementById('logOut');
        
        if (logOutButton) {
            logOutButton.addEventListener('click', function () {
              
                window.location.href = '../home/home.html';
            });
        } else {
            console.error('No se encontró el botón de cierre de sesión.');
        }
    }, 100); // Espera 100ms antes de ejecutar el código (ajusta según sea necesario)
});


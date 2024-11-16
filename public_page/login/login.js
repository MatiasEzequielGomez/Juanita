document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPass').value;

    if (email && password) {
        sessionStorage.setItem('userEmail', email);
        sessionStorage.setItem('userLoggedIn', password);

        window.location.href = '../../private_page/home/home.html'; 
    } else {
        alert('Usuario o contraseña inválida');
    }
});



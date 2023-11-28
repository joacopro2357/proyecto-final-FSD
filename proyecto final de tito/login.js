// login.js

document.addEventListener('DOMContentLoaded', function () {
    // Verificar si hay credenciales almacenadas en localStorage
    const storedCredentials = localStorage.getItem('credentials');

    // Si hay credenciales almacenadas, redirigir al usuario a la página de carga de elementos
    if (storedCredentials) {
        window.location.href = 'elements.html';
    }

    // Obtener el formulario de inicio de sesión
    const loginForm = document.getElementById('loginForm');

    // Agregar un event listener al formulario
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Verificar las credenciales (puedes agregar lógica más avanzada aquí)
        if (checkCredentials(email, password)) {
            // Credenciales válidas, redirigir al usuario a la página de carga de elementos
            localStorage.setItem('credentials', JSON.stringify({ email: email }));
            window.location.href = 'elements.html';
        } else {
            // Credenciales inválidas, mostrar un mensaje de error (puedes personalizar según tus necesidades)
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    });

    // Función para verificar las credenciales (puedes personalizar según tus necesidades)
    function checkCredentials(email, password) {
        
        // Por ahora, asumiremos que hay un usuario predefinido con ciertas credenciales
        const predefinedUser = {
            email: 'usuarioprueba@gmail.com',
            password: 'contraseña123'
        };

        // Verificar si las credenciales coinciden con el usuario predefinido
        return email === predefinedUser.email && password === predefinedUser.password;
    }
});
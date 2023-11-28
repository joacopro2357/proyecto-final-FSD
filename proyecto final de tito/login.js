

document.addEventListener('DOMContentLoaded', function () {
    
    const storedCredentials = localStorage.getItem('credentials');

    
    if (storedCredentials) {
        window.location.href = 'elements.html';
    }

    
    const loginForm = document.getElementById('loginForm');


    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

     
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        
        if (checkCredentials(email, password)) {
            
            localStorage.setItem('credentials', JSON.stringify({ email: email }));
            window.location.href = 'elements.html';
        } else {
            
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    });

    function checkCredentials(email, password) {
        
      
        const predefinedUser = {
            email: 'usuarioprueba@gmail.com',
            password: 'contraseña123'
        };

    
        return email === predefinedUser.email && password === predefinedUser.password;
    }
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    if (password === 'janlos') {
        window.location.href = 'gallery.html';
    } else {
        alert('Contraseña incorrecta. Inténtalo de nuevo.');
    }
});

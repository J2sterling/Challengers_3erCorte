function showEmailLogin() {
    document.getElementById("email-form").style.display = "block";
}

function handleLogin(event) {
    event.preventDefault();

    // Aquí iría la lógica de autenticación real usando Firebase
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulación de autenticación exitosa
    setTimeout(() => {
        document.getElementById("success-message").style.display = "block";
        document.getElementById("login-form").style.display = "none";
    }, 1000);
}

function googleLogin() {
    // Aquí iría la lógica de autenticación con Google
    alert("Iniciar sesión con Google");
}

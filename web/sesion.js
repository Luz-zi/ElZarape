
 function iniciarSesion(){
    let username =document.getElementById("txtUsername").value;
    let password =document.getElementById("txtPassword").value;

    // Objeto con usuarios y contraseñas
    const usuarios = {
        "admin": "admin",
        "Lucero": "123",
        "Michelle": "345",
        "Diego": "678",
        "Isa": "910",
    };

    
    if (usuarios[username] && usuarios[username] === password) {
    // Guardar el nombre de usuario en localStorage
    localStorage.setItem("username", username);
    window.location.href= 'inicio.html';
    
}else {
    let loginFailDiv = document.getElementById("loginFail");
    loginFailDiv.innerHTML = '<div class="alert alert-danger" role="alert">Usuario o contraseña incorrectos</div>';
    loginFailDiv.style.display = "block";// Mostrar el div
    document.getElementById("txtUsername").value = "";
    document.getElementById("txtPassword").value = ""; 
    
}
}
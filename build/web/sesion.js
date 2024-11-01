
 function iniciarSesion(){
    let username =document.getElementById("txtUsername").value;
    let password =document.getElementById("txtPassword").value;

let validacionUser = "admin";
let validacionPass = "admin";

if (username === validacionUser && password === validacionPass){
    window.location.href= 'inicio.html';
    
}else {
    let loginFailDiv = document.getElementById("loginFail");
    loginFailDiv.innerHTML = '<div class="alert alert-danger" role="alert">Usuario o contraseña incorrectos</div>';
    loginFailDiv.style.display = "block";// Mostrar el div
    document.getElementById("txtUsername").value = "";
    document.getElementById("txtPassword").value = ""; 
    
}
}
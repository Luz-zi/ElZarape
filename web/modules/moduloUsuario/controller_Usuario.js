let indexUsuarioSeleccionado;
let usuarios = [];
let idContador = 4; // consecutividad del id

export function addUsuario() {
    let idUsuario,
            nombre,
            contraseña;

    idUsuario = idContador++; // para incrementar los id
    nombre = document.getElementById("txtNombre").value;
    contraseña = generarContraseña();

    let usuario = {};
    usuario.idUsuario = idUsuario;
    usuario.nombre = nombre;
    usuario.contraseña = contraseña;
    usuario.estatus = "Activo";
    usuarios.push(usuario);

    clean();
    loadTabla();
}


export function loadTabla() {
    let cuerpo = "";
    usuarios.forEach(function (usuario) {
        let registro =
                '<tr onclick="moduloUsuario.selectUsuario(' + usuarios.indexOf(usuario) + ');">' +
                '<td>' + usuario.idUsuario + '</td>' +
                '<td>' + usuario.nombre + '</td>' +
                '<td>' + usuario.contraseña + '</td>' +
                '<td>' + usuario.estatus + '</td></tr>';


        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblUsuario").innerHTML = cuerpo;
}


export function selectUsuario(index) {
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete2").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");

    let usuario = usuarios[index];
    document.getElementById("txtNumUnico").value = usuario.idUsuario;
    document.getElementById("txtNombre").value = usuario.nombre;
    document.getElementById("txtCon").value = usuario.contraseña;

    indexUsuarioSeleccionado = index;
}

export function clean() {
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtCon").value = "";

    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexUsuarioSeleccionado = 0;
}

export function updateUsuario() {
    let idUsuario,
            nombre,
            contraseña;

    idUsuario = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    contraseña = document.getElementById("txtCon").value;
    

    let usuario = {};
    usuario.idUsuario = idUsuario;
    usuario.nombre = nombre;
    usuario.contraseña = contraseña;
    usuario.estatus = "Activo";
    usuarios[indexUsuarioSeleccionado] = usuario;
    clean();
    loadTabla();
}


fetch("modules/moduloUsuario/data_Usuario.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (jsondata) {
            usuarios = jsondata;
            console.log(usuarios);
            loadTabla();
        });

export function deleteUsuario() {
    usuarios[indexUsuarioSeleccionado].estatus = "Baja";
    clean();
    loadTabla();
}

export function searchUsuario() {
    let filtro = document.getElementById("txtBusquedaUsuario").value;
    let resultados = usuarios.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (usuario) {
        let registro =
                '<tr onclick="moduloUsuario.selectUsuario(' + usuarios.indexOf(usuario) + ');">' +
                '<td>' + usuario.idUsuario + '</td>' +
                '<td>' + usuario.nombre + '</td>' +
                '<td>' + usuario.contraseña + '</td>' +
                '<td>' + usuario.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblUsuario").innerHTML = cuerpo;
}


export function imprimir() {
    let contenido = document.getElementById("tblUsuario").outerHTML;
    let ventana = window.open("", "", "width=800,height=600");
    ventana.document.write("<html><head><title>Resultados de búsqueda</title></head><body>");
    ventana.document.write("<h1>Resultados de búsqueda</h1>");
    ventana.document.write("<table border='1' cellpadding='5' cellspacing='0'>");
    ventana.document.write("<tr><th>ID Usuario</th><th>Nombre</th><th>Contraseña</th><th>Estatus</th></th>");
    ventana.document.write(contenido);
    ventana.document.write("</table>");
    ventana.document.write("</body></html>");
    ventana.document.close();
    ventana.print();
}

// Función para generar una contraseña aleatoria de 12 caracteres
function generarContraseña(longitud = 12) {
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let contraseña = '';
    let caracteresLength = caracteres.length;

    for (let i = 0; i < longitud; i++) {
        let randomIndex = Math.floor(Math.random() * caracteresLength);
        contraseña += caracteres[randomIndex];
    }

    return contraseña;
}





let indexSucursalSeleccionado;
let sucursales = [];
let idContador = 4;

export function addSucursal() {
    let idSucursal,
        nombre,
        calle,
        numInt,
        numExt,
        colonia,
        CP,
        GPSLatitud,
        GPSLongitud,
        horarioApertura,
        horarioCierre,
        URLPagina,
        foto;

    idSucursal = (idContador++).toString().padStart(3, '0');
    nombre = document.getElementById("txtNombre").value;
    calle = document.getElementById("txtCalle").value;
    numInt = document.getElementById("txtNumInt").value;
    numExt = document.getElementById("txtNumExt").value;
    colonia = document.getElementById("txtColonia").value;
    CP = document.getElementById("txtCP").value;
    GPSLatitud = document.getElementById("txtGPSLa").value;
    GPSLongitud = document.getElementById("txtGPSLo").value;
    horarioApertura = document.getElementById("txtHorarioA").value;
    horarioCierre = document.getElementById("txtHorarioC").value;
    URLPagina = document.getElementById("txtPagWeb").value;
    foto = document.getElementById("img").value;


    let sucursal = {};
    sucursal.idSucursal = idSucursal;
    sucursal.nombre = nombre;
    sucursal.calle = calle;
    sucursal.numInt = numInt;
    sucursal.numExt = numExt;
    sucursal.colonia = colonia;
    sucursal.CP = CP;
    sucursal.GPSLatitud = GPSLatitud;
    sucursal.GPSLongitud = GPSLongitud;
    sucursal.horarioApertura = horarioApertura;
    sucursal.horarioCierre = horarioCierre;
    sucursal.URLPagina = URLPagina;
    sucursal.foto = foto;
    sucursal.estatus = 'Activo';
    sucursales.push(sucursal);
    clean();
    loadTabla();
}

export function loadTabla() {
    let cuerpo = "";
    sucursales.forEach(function (sucursal) {
        let registro =
            '<tr onclick="moduloSucursal.selectSucursal(' + sucursales.indexOf(sucursal) + ');">' +
            '<td>' + sucursal.idSucursal + '</td>' +
            '<td>' + '<img   class ="imagenesTabla" style="width: 60px; height: 60px" src="' + sucursal.foto + '" alt=""/>' + '</td>' +
            '<td>' + sucursal.nombre + '</td>' +
            '<td>' + sucursal.calle + "<br>" + sucursal.numInt + " " + sucursal.numExt + "<br>" + sucursal.colonia + "<br>" + sucursal.CP + '</td>' +
            '<td>' + sucursal.GPSLatitud + "<br>" + sucursal.GPSLongitud + '</td>' +
            '<td>' + sucursal.horarioApertura + "<br>" + sucursal.horarioCierre + '</td>' +
            '<td>' + sucursal.URLPagina + '</td>' +
            '<td>' + sucursal.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblSucursal").innerHTML = cuerpo;
}

export function selectSucursal(index) {

    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete2").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    
    document.getElementById("txtNumUnico").value = sucursales[index].idSucursal;
    document.getElementById("txtNombre").value = sucursales[index].nombre;
    document.getElementById("txtCalle").value = sucursales[index].calle;
    document.getElementById("txtNumInt").value = sucursales[index].numInt;
    document.getElementById("txtNumExt").value = sucursales[index].numExt;
    document.getElementById("txtColonia").value = sucursales[index].colonia;
    document.getElementById("txtCP").value = sucursales[index].CP;
    document.getElementById("txtGPSLa").value = sucursales[index].GPSLatitud;
    document.getElementById("txtGPSLo").value = sucursales[index].GPSLongitud;
    document.getElementById("txtHorarioA").value = sucursales[index].horarioApertura;
    document.getElementById("txtHorarioC").value = sucursales[index].horarioCierre;
    document.getElementById("txtPagWeb").value = sucursales[index].URLPagina;
    document.getElementById("img").value = sucursales[index].foto;
    indexSucursalSeleccionado = index;
}


fetch("modules/moduloSucursal/data_Sucursal.json")
    .then(function (response) { return response.json(); })
    .then(function (jsondata) {
        sucursales = jsondata;
        console.log(sucursales);
        loadTabla();
    });

export function clean() {
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtCalle").value = "";
    document.getElementById("txtNumInt").value = "";
    document.getElementById("txtNumExt").value = "";
    document.getElementById("txtColonia").value = "";
    document.getElementById("txtCP").value = "";
    document.getElementById("txtGPSLa").value = "";
    document.getElementById("txtGPSLo").value = "";
    document.getElementById("txtHorarioA").value = "";
    document.getElementById("txtHorarioC").value = "";
    document.getElementById("txtPagWeb").value = "";
    document.getElementById("img").value = "";
    document.getElementById("txtBusquedaSucursal").value = "";
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete2").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexSucursalSeleccionado = 0;
}
export function updateSucursal() {
    let idSucursal,
        nombre,
        calle,
        numInt,
        numExt,
        colonia,
        CP,
        GPSLatitud,
        GPSLongitud,
        horarioApertura,
        horarioCierre,
        URLPagina,
        foto;

    idSucursal = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    calle = document.getElementById("txtCalle").value;
    numInt = document.getElementById("txtNumInt").value;
    numExt = document.getElementById("txtNumExt").value;
    colonia = document.getElementById("txtColonia").value;
    CP = document.getElementById("txtCP").value;
    GPSLatitud = document.getElementById("txtGPSLa").value;
    GPSLongitud = document.getElementById("txtGPSLo").value;
    horarioApertura = document.getElementById("txtHorarioA").value;
    horarioCierre = document.getElementById("txtHorarioC").value;
    URLPagina = document.getElementById("txtPagWeb").value;
    foto = document.getElementById("img").value;
    let sucursal = {};
    sucursal.idSucursal = idSucursal;
    sucursal.nombre = nombre;
    sucursal.calle = calle;
    sucursal.numInt = numInt;
    sucursal.numExt = numExt;
    sucursal.colonia = colonia;
    sucursal.CP = CP;
    sucursal.GPSLatitud = GPSLatitud;
    sucursal.GPSLongitud = GPSLongitud;
    sucursal.horarioApertura = horarioApertura;
    sucursal.horarioCierre = horarioCierre;
    sucursal.URLPagina = URLPagina;
    sucursal.foto = foto;
    sucursal.estatus = "Activo";
    sucursales[indexSucursalSeleccionado] = sucursal;
    clean();
    loadTabla();
}
export function deleteSucursal() {
    sucursales[indexSucursalSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

export function searchSucursal() {
    let filtro = document.getElementById("txtBusquedaSucursal").value;
    let filtroPor = document.getElementById("filtroPor").value; // Agregar un select con opciones de filtrado
    let resultados = [];

    if (filtroPor === "nombre") {
        resultados = sucursales.filter(element => element.nombre.toLowerCase().includes(filtro.toLowerCase()));
    } else if (filtroPor === "ubicacion") {
        resultados = sucursales.filter(element => element.calle.toLowerCase().includes(filtro.toLowerCase()) ||
             element.numInt.toLowerCase().includes(filtro.toLowerCase()) ||
            element.numExt.toLowerCase().includes(filtro.toLowerCase()) ||
            element.colonia.toLowerCase().includes(filtro.toLowerCase()) ||
             element.CP.toLowerCase().includes(filtro.toLowerCase()));
    } else {
        resultados =  sucursales.filter(element => element.idSucursal.toLowerCase().includes(filtro))
        ; 
    }
let cuerpo = "";
resultados.forEach(function (sucursal) {
    let registro =
        '<tr onclick="moduloSucursal.selectSucursal(' + sucursales.indexOf(sucursal) + ');">' +
        '<td>' + sucursal.idSucursal + '</td>' +
        '<td>' + '<img   class ="imagenesTabla" style="width: 60px; height: 60px" src="' + sucursal.foto + '" alt=""/>' + '</td>' +
        '<td>' + sucursal.nombre + '</td>' +
        '<td>' + sucursal.calle + "<br>" + sucursal.numInt + " " + sucursal.numExt + "<br>" + sucursal.colonia + "<br>" + sucursal.CP + '</td>' +
        '<td>' + sucursal.GPSLatitud + "<br>" + sucursal.GPSLongitud + '</td>' +
        '<td>' + sucursal.horarioApertura + "<br>" + sucursal.horarioCierre + '</td>' +
        '<td>' + sucursal.URLPagina + '</td>' +
        '<td>' + sucursal.estatus + '</td></tr>';
    cuerpo += registro;
});
document.getElementById("tblSucursal").innerHTML = cuerpo;
}

export function imprimir() {
    {
        let contenido = document.getElementById("tblSucursal").outerHTML;
        let ventana = window.open("", "", "width=800,height=600");
        ventana.document.write("<html><head><title>Resultados de búsqueda</title></head><body>");
        ventana.document.write("<h1>Resultados de búsqueda</h1>");
        ventana.document.write("<table border='1' cellpadding='5' cellspacing='0'>");
        ventana.document.write("<tr><th>Foto</th><th>ID</th><th>Nombre</th><th>Dirección</th><th>GPS</th><th>Horario</th><th>Página web</th><th>Estatus</th></tr>");
        ventana.document.write(contenido);
        ventana.document.write("</table>");
        ventana.document.write("</body></html>");
        ventana.print(loadTabla());
        ventana.close(loadTabla());
    };
}
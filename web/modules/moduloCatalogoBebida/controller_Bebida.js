let indexBebidaSeleccionado;
let bebidas = [];
let idContador = 5; // consecutividad del id

export function addBebida() {
    let idBebida,
        nombre,
        descripcion,
        precio,
        categoria,
        foto;
    
    idBebida = idContador++; // para incrementar los id
    nombre = document.getElementById("txtNombre").value;
    descripcion = document.getElementById("txtDescripcion").value;
    precio = document.getElementById("txtPrecio").value;
    categoria = document.getElementById("txtCategoria").value;
    foto=document.getElementById("img").value;
    
    let bebida = {};
       bebida.idBebida=idBebida;
       bebida.nombre=nombre;
       bebida.descripcion=descripcion;
       bebida.precio=precio;
       bebida.categoria=categoria;
       bebida.estatus = "Activo";
       bebida.foto=foto;
    bebidas.push(bebida);
    clean();
    loadTabla();

}

export function loadTabla() {
    let cuerpo = "";
    bebidas.forEach(function (bebida) {
        let registro =
            '<tr onclick="moduloCatalogoBebida.selectBebida(' + bebidas.indexOf(bebida) + ');">' +
            '<td>' + bebida.idBebida + '</td>' +
            '<td>' + '<img   class ="imagenes" style="width: 60px; height: 60px" src="' + bebida.foto + '" alt=""/>' + '</td>' +
            '<td>' + bebida.nombre + '</td>' +
            '<td>' + bebida.descripcion + '</td>' +
            '<td>' + bebida.precio + '</td>' +
            '<td>' + bebida.categoria + '</td>' +
            '<td>' + bebida.estatus + '</td>'+
            '</tr>';

        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblBebida").innerHTML = cuerpo;
}

export function selectBebida(index) {

    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete2").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    document.getElementById("txtIdBebida").value = bebidas[index].idBebida;
    document.getElementById("txtNombre").value = bebidas[index].nombre;
    document.getElementById("txtDescripcion").value = bebidas[index].descripcion;
    document.getElementById("txtPrecio").value = bebidas[index].precio;
    document.getElementById("txtCategoria").value = bebidas[index].categoria;
    document.getElementById("img").value= bebidas[index].foto;
    indexBebidaSeleccionado = index;
}

fetch("modules/moduloCatalogoBebida/data_Bebida.json")
    .then(function (response) {return response.json(); })
    .then(function (jsondata) {
        bebidas = jsondata;
        console.log(bebidas);
        loadTabla();
    });

export function clean() {
    document.getElementById("txtIdBebida").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtDescripcion").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtCategoria").value = "";
    document.getElementById("img").value = "";
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete2").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexBebidaSeleccionado = 0;
}

export function updateBebida() {
    let idBebida,
        nombre,
        descripcion,
        precio,
        categoria,
        foto;

     idBebida = document.getElementById("txtIdBebida").value;
     nombre = document.getElementById("txtNombre").value;
     descripcion = document.getElementById("txtDescripcion").value;
     precio = document.getElementById("txtPrecio").value;
     categoria = document.getElementById("txtCategoria").value;
    foto=document.getElementById("img").value;
     let bebida = {};
        bebida.idBebida=idBebida;
        bebida.nombre=nombre;
        bebida.descripcion=descripcion;
        bebida.precio=precio;
        bebida.categoria=categoria;
        bebida.foto=foto;
        bebida.estatus = '<i class="bi bi-x-circle "></i>'+"Activo";
        bebidas[indexBebidaSeleccionado] = bebida;
        clean();
        loadTabla();
}



export function deleteBebida() {
    bebidas[indexBebidaSeleccionado].estatus="inactivo"; // Elimina el elemento seleccionado
    clean();
    loadTabla();
}

export function searchBebida() {
    let filtro = document.getElementById("txtBusquedaBebida").value.toLowerCase();
    let filtroPor = document.getElementById("filtroPor").value;
    let resultados = [];

    if (filtroPor === "nombre") {
        resultados = bebidas.filter(bebida => bebida.nombre.toLowerCase().includes(filtro));
    } else if (filtroPor === "precio") {
        resultados = bebidas.filter(bebida => bebida.precio.toString().toLowerCase().includes(filtro));
    } else if (filtroPor === "categoria") {
        resultados = bebidas.filter(bebida => bebida.categoria.toString().toLowerCase().includes(filtro));
    }else {
        resultados = bebidas; // Muestra todos si no hay filtro o filtro no válido
    }

    let cuerpo = "";
    resultados.forEach(function (bebida, index) {
        let registro =
            '<tr onclick="moduloCatalogoBebida.selectBebida(' + index + ');">' +
            '<td>' + bebida.idBebida + '</td>' +
            '<td>' + '<img  class="imagenesTabla" src="' + bebida.foto + '" alt=""/>' + '</td>' +
            '<td>' + bebida.nombre + '</td>' +
            '<td>' + bebida.descripcion + '</td>' +
            '<td>' + bebida.precio + '</td>' +
            '<td>' + bebida.categoria + '</td>' +
            '<td>' + bebida.estatus + '</td>'+
            '</tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblBebida").innerHTML = cuerpo;
}

export function imprimir() {
    let contenido = document.getElementById("tblBebida").outerHTML;
    let ventana = window.open("", "", "width=800,height=600");
    ventana.document.write("<html><head><title>Resultados de búsqueda</title></head><body>");
    ventana.document.write("<h1>Resultados de búsqueda</h1>");
    ventana.document.write("<table border='1' cellpadding='5' cellspacing='0'>");
    ventana.document.write("<tr><th>ID Bebida</th><th>Foto</th><th>Nombre</th><th>Descripción</th><th>Precio</th><th>Categoria</th><th>Estatus</th></tr>");
    ventana.document.write(contenido);
    ventana.document.write("</table>");
    ventana.document.write("</body></html>");
    ventana.document.close();
    ventana.print();
}



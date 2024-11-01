let indexAlimentoSeleccionado;
let alimentos = [];
let idContador = 7;

export function addAlimento() {
    let idAlimento,
            nombre,
            categoria,
            descripcion,
            precio,
            imagen;


    idAlimento = "8d"+(idContador++).toString().padStart(2,'0');
    nombre = document.getElementById("txtNombre").value;
    categoria = document.getElementById("txtCategoria").value;
    descripcion = document.getElementById("txtDescripcion").value;
    precio = document.getElementById("txtPrecio").value;
    imagen = document.getElementById("txtImagen").value;


    let alimento = {};
    alimento.idAlimento = idAlimento;
    alimento.nombre = nombre;
    alimento.categoria = categoria;
    alimento.descripcion = descripcion;
    alimento.imagen = imagen;
    alimento.precio = precio;
    alimento.estatus = "Activo";
    alimentos.push(alimento);
    //  clean();
    loadTabla();
}

export function loadTabla() {
    let cuerpo = "";
    alimentos.forEach(function (alimento) {
        let registro =
                '<tr onclick="moduloCatalogoAlimento.selectAlimento(' + alimentos.indexOf(alimento) + ');">' +
                '<td>' + alimento.idAlimento + '</td>' +
                '<td>' + '<img   class ="imagenesTabla" style="width: 60px; height: 60px" src="' + alimento.imagen + '" alt=""/>' + '</td>' +
                '<td>' + alimento.nombre + '</td>' +
                '<td>' + alimento.categoria + '</td>' +
                '<td>' + alimento.descripcion + '</td>' +
                '<td>' +'$'+ alimento.precio + '</td>' +
                '<td>' + alimento.estatus + '</td>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblAlimento").innerHTML = cuerpo;
}

export function selectAlimento(index) {
    document.getElementById("txtNumUnico").value = alimentos[index].idAlimento;
    document.getElementById("txtImagen").value = alimentos[index].imagen;
    document.getElementById("txtNombre").value = alimentos[index].nombre;
    document.getElementById("txtCategoria").value = alimentos[index].categoria;
    document.getElementById("txtDescripcion").value = alimentos[index].descripcion;
    document.getElementById("txtPrecio").value = alimentos[index].precio;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete2").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexAlimentoSeleccionado = index;
}


fetch("modules/moduloCatalogoAlimento/data_Alimento.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (jsondata) {
            alimentos = jsondata;
            console.log(alimentos);
            loadTabla();
        });

export function clean() {
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtImagen").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtCategoria").value = "";
    document.getElementById("txtDescripcion").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete2").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexAlimentoSeleccionado = 0;
}

export function updateAlimento() {
    let idAlimento,
            nombre,
            categoria,
            descripcion,
            imagen,
            precio;

    idAlimento = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    categoria = document.getElementById("txtCategoria").value;
    descripcion = document.getElementById("txtDescripcion").value;
    imagen = document.getElementById("txtImagen").value;
    precio = document.getElementById("txtPrecio").value;


    let alimento = {};
    alimento.idAlimento = idAlimento;
    alimento.nombre = nombre;
    alimento.categoria = categoria;
    alimento.descripcion = descripcion;
    alimento.imagen = imagen;
    alimento.precio = precio;
    alimento.estatus = "Activo";
    alimentos[indexAlimentoSeleccionado] = alimento;
    clean();
    loadTabla();
}

export function deleteAlimento() {
    alimentos[indexAlimentoSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}


export function searchAlimento() {
    let filtro = document.getElementById("txtBusquedaAlimento").value;
    let resultados = alimentos.filter(element => element.nombre === filtro || element.categoria === filtro || element.idAlimento === filtro);

    let cuerpo = "";
    resultados.forEach(function (alimento) {
        let registro =
        '<tr onclick="moduloCatalogoAlimento.selectAlimento(' + alimentos.indexOf(alimento) + ');">' +
        '<td>' + alimento.idAlimento + '</td>' +
        '<td>' + '<img   class ="imagenesTabla" style="width: 60px; height: 60px" src="' + alimento.imagen + '" alt=""/>' + '</td>' +
        '<td>' + alimento.nombre + '</td>' +
        '<td>' + alimento.categoria + '</td>' +
        '<td>' + alimento.descripcion + '</td>' +
        '<td>' +'$'+ alimento.precio + '</td>' +
        '<td>' + alimento.estatus + '</td>';
cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblAlimento").innerHTML = cuerpo;
}

export function imprimir() {
    {
        let contenido = document.getElementById("tblAlimento").outerHTML;
        let ventana = window.open("", "", "width=800,height=600");
        ventana.document.write("<html><head><title>Resultados de búsqueda</title></head><body>");
        ventana.document.write("<h1>Resultados de búsqueda</h1>");
        ventana.document.write("<table border='1' cellpadding='5' cellspacing='0'>");
        ventana.document.write("<th>ID</th><th>Imagen</th><th>Nombre</th><th>Categoria</th><th>Descipción</th><th>Precio</th><th>Estatus</th></tr>");
        ventana.document.write(contenido);
        ventana.document.write("</table>");
        ventana.document.write("</body></html>");
        ventana.print(loadTabla());
        ventana.close(loadTabla());
    }
    ;
}
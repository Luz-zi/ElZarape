let indexComboSeleccionado;
let combos = [];
let idContador = 4;



// Función para agregar un nuevo combo
export function addCombos() {
    let idCombo,
        nombre,
        descripcion,
        size,
        precio,
        alimentos,
        bebidas,
        postres,
        foto;

    idCombo = (idContador++).toString().padStart(3, '0');
    nombre = document.getElementById("txtNombre").value;
    descripcion = document.getElementById("txtDescripcion").value;
    precio = document.getElementById("txtPrecio").value;
    size = document.getElementById("size").value;
    alimentos = document.getElementById("alimento").value;
    bebidas = document.getElementById("bebidas").value;
    postres = document.getElementById("postres").value;
    foto = document.getElementById("img").value;

    let combo = {};
    combo.idCombo = idCombo;
    combo.nombre = nombre;
    combo.descripcion = descripcion;
    combo.precio = precio;
    combo.alimentos = alimentos;
    combo.bebidas = bebidas;
    combo.postres = postres;
    combo.size = size;
    combo.foto = foto;
    combo.estatus = "Activo";
    combos.push(combo);
    clean();
    loadTabla();
}

// Función para cargar combos en la tabla
export function loadTabla() {
    let cuerpo = "";
    combos.forEach(function (combo) {
        let registro =
            '<tr onclick="moduloCombo.selectCombo(' + combos.indexOf(combo) + ');">' +
            '<td>' + combo.idCombo + '</td>' +
            '<td>' + '<img   class ="imagenesTabla" style="width: 60px; height: 60px" src="' + combo.foto + '" alt=""/>' + '</td>' +
            '<td>' + combo.nombre + '</td>' +
            '<td>' + combo.size + '</td>' +
            '<td>' + combo.alimentos + '</td>' +
            '<td>' + combo.bebidas + '</td>' +
            '<td>' + combo.postres + '</td>' +
            '<td>' + combo.descripcion + '</td>' +
            '<td>' + '$' + combo.precio + '</td>' +
            '<td>' + combo.estatus + '</td>' +
            '</tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblCombos").innerHTML = cuerpo;
}

// Función para seleccionar un combo
export function selectCombo(index) {
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete2").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");

    document.getElementById("txtNumUnico").value = combos[index].idCombo;
    document.getElementById("txtNombre").value = combos[index].nombre;
    document.getElementById("txtDescripcion").value = combos[index].descripcion;
    document.getElementById("txtPrecio").value = combos[index].precio;
    document.getElementById("alimento").value = combos[index].alimentos;
    document.getElementById("size").value = combos[index].size;
    document.getElementById("bebidas").value = combos[index].bebidas;
    document.getElementById("postres").value = combos[index].postres;
    document.getElementById("img").value = combos[index].foto;

    indexComboSeleccionado = index;
}

// Cargar combos desde el archivo JSON
fetch("modules/moduloDetalleCombo/data_Combos.json")
    .then(function (response) { return response.json(); })
    .then(function (jsondata) {
        combos = jsondata;
        console.log(combos);
        loadTabla();
    });

// Función para limpiar el formulario
export function clean() {
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtDescripcion").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("alimento").value = "";
    document.getElementById("bebidas").value = "";
    document.getElementById("size").value = "";
    document.getElementById("postres").value = "";
    document.getElementById("img").value = "";
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete2").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexComboSeleccionado = 0; // Mejor usar null en lugar de 0
}

// Función para actualizar un combo
export function updateCombos() {
    let idCombo,
        nombre,
        descripcion,
        size,
        precio,
        alimentos,
        bebidas,
        postres,
        foto;

    idCombo = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    descripcion = document.getElementById("txtDescripcion").value;
    precio = document.getElementById("txtPrecio").value;
    size = document.getElementById("size").value;
    alimentos = document.getElementById("alimento").value;
    bebidas = document.getElementById("bebidas").value;
    postres = document.getElementById("postres").value;
    foto = document.getElementById("img").value;

    let combo = {};
    combo.idCombo = idCombo;
    combo.nombre = nombre;
    combo.descripcion = descripcion;
    combo.precio = precio;
    combo.alimentos = alimentos;
    combo.bebidas = bebidas;
    combo.postres = postres;
    combo.size = size;
    combo.foto = foto;
    combo.estatus = "Activo";
    combos[indexComboSeleccionado] = combo;
    clean();
    loadTabla();
}

// Función para eliminar un combo
export function deleteCombos() {
    combos[indexComboSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

// Función para buscar combos
export function searchCombos() {
    let filtro = document.getElementById("txtBusquedaCombos").value;
    let filtroPor = document.getElementById("filtroPor").value;
    let resultados = [];
    if (filtroPor === "nombre") {
        resultados = combos.filter(element => element.nombre.toLowerCase().includes(filtro.toLowerCase()));
    } else {
        resultados = combos.filter(element => element.idCombo.toLowerCase().includes(filtro));
    }


    let cuerpo = "";
    resultados.forEach(function (combo) {
        let registro =
            '<tr onclick="moduloCombo.selectCombo(' + combos.indexOf(combo) + ');">' +
            '<td>' + combo.idCombo + '</td>' +
            '<td>' + '<img   class ="imagenesTabla" style="width: 60px; height: 60px" src="' + combo.foto + '" alt=""/>' + '</td>' +
            '<td>' + combo.nombre + '</td>' +
            '<td>' + combo.size + '</td>' +
            '<td>' + combo.alimentos + '</td>' +
            '<td>' + combo.bebidas + '</td>' +
            '<td>' + combo.postres + '</td>' +
            '<td>' + combo.descripcion + '</td>' +
            '<td>' + '$' + combo.precio + '</td>' +
            '<td>' + combo.estatus + '</td>' +
            '</tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblCombos").innerHTML = cuerpo;
}

export function imprimir() {
    {
        let contenido = document.getElementById("tblCombos").outerHTML;
        let ventana = window.open("", "", "width=800,height=600");
        ventana.document.write("<html><head><title>Resultados de búsqueda</title></head><body>");
        ventana.document.write("<h1>Resultados de búsqueda</h1>");
        ventana.document.write("<table border='1' cellpadding='5' cellspacing='0'>");
        ventana.document.write("<tr><th>ID</th><th>Foto</th><th>Nombre</th><th>Tamaño</th><th>Alimentos</th><th>Bebidas</th><th>Postres</th><th>Descripcion</th><th>Precio</th><th>Estatus</th></tr>");
        ventana.document.write(contenido);
        ventana.document.write("</table>");
        ventana.document.write("</body></html>");
        ventana.print(loadTabla());
        ventana.close(loadTabla());
    };
}

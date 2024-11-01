let moduloSucursal;
let moduloUsuario;

function cargarInicio() {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    fetch("web/inicio.html");
}
 
function cargarModuloSucursal(){
    fetch("modules/moduloSucursal/view_Sucursal.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloSucursal/controller_Sucursal.js").then(
                            function(controller){
                                moduloSucursal = controller;
                            }
                            );
                }
            );
}
function cargarModuloCatalogoAlimento(){
    fetch("modules/moduloCatalogoAlimento/view_Alimento.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloCatalogoAlimento/controller_Alimento.js").then(
                            function(controller){
                                moduloCatalogoAlimento = controller;
                            }
                            );
                }
            );
}
function cargarModuloBebidas(){
    fetch("modules/moduloCatalogoBebida/view_Bebida.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloCatalogoBebida/controller_Bebida.js").then(
                            function(controller){
                                moduloCatalogoBebida = controller;
                            }
                            );
                }
            );
}
 
function cargarModuloUsuario(){
    fetch("modules/moduloUsuario/view_Usuario.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloUsuario/controller_Usuario.js").then(
                            function(controller){
                                moduloUsuario = controller;
                            }
                            );
                }
            );
}

function cargarModuloCombos(){
    fetch("modules/moduloDetalleCombo/view_combos.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloDetalleCombo/controller_Combo.js").then(
                            function(controller){
                                moduloCombo = controller;
                            }
                            );
                }
            );
}

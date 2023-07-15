

let msjeliminar = ""
function eliminarproducto(){
    let opciones = parseInt(prompt("Elija el id del producto"))
    carrito = carrito.filter(e => e.id != opciones)

    carrito.forEach(e => msjeliminar += e.datosproducto());
    alert(msjeliminar)

}
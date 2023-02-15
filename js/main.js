const productos = [
    {imagen: 'img/notebook.jpeg', nombre: 'notebook', codigo: 1, descripcion: "notebook acer 14", precio: 500000},
    {imagen: 'img/mouse.webp', nombre: 'mouse', codigo: 2, descripcion: "mouse gamer alambrico", precio: 70000},
    {imagen: 'img/teclado.webp', nombre: 'teclado', codigo: 3, descripcion: "teclado ergonometrico con retroiluminacion", precio: 100000},
    {imagen: 'img/imagen3.jpg', nombre: 'monitor', codigo: 4, descripcion: "monitor pantalla plana 21", precio: 200000},
    {imagen: 'img/imagen5.jpg', nombre: 'celular', codigo: 5, descripcion: "celular iphone 13", precio: 700000},
    {imagen: 'img/imagen6.jpg', nombre: 'disco externo', codigo: 6, descripcion: "disco externo de 2 terabit", precio: 190000},
    {imagen: 'img/imagen7.jpg', nombre: 'pen drive', codigo: 7, descripcion: "pen drive 256", precio: 50000},
    {imagen: 'img/imagen8.jpg', nombre: 'ventilador', codigo: 8, descripcion: "ventilador para notebook con dos aspas", precio: 70000},
    {imagen: 'img/imagen9.jpg', nombre: 'modem', codigo: 9, descripcion: "modem marca IRT", precio: 70000},
    {imagen: 'img/imagen10.jpg', nombre: 'proyector', codigo: 10, descripcion: "mini proyector inalambrico", precio: 250000}
]

/* function mostrarProductos() {

} */

/* Referenciar contenedor de productos con DOM */
const mostrador = document.getElementsByClassName('mostrador');
/* Div del Producto */
const articuloProducto = document.createElement('div');
articuloProducto.classList.add('col-lg-4');
/* Imágen del Producto */
const imagenProducto = document.createElement('img');
imagenProducto.src = productos[0].imagen;
imagenProducto.classList.add('bd-placeholder-img', 'rounded-circle');
imagenProducto.setAttribute('width', 140);
imagenProducto.setAttribute('height', 140);
imagenProducto.setAttribute('focusable', 'false');
imagenProducto.alt = productos[0].descripcion;
/* Nombre y Modelo del Producto */
const nombreProducto = document.createElement('h2');
nombreProducto.classList.add('fw-normal');
nombreProducto.textContent = `${productos[0].nombre} - ${productos[0].descripcion}`;
/* Descripción Larga del Producto */
const descripcionProducto = document.createElement("p");
descripcionProducto.textContent = productos[0].descripcion;
// precio del producto
const precioProducto = document.createElement("h2");
precioProducto.classList.add('fw-normal');
precioProducto.textContent = "precio: $" + productos[0].precio;
// boton del producto
const botonProducto = document.createElement("p");
botonProducto.innerHTML = '<a class="btn btn-secondary" href="#">Añadir al Carrito &raquo;</a>';




// mostrador[0].appendChild(articuloProducto);




/* { <label><input type="checkbox" id="cbox1" value="first_checkbox"> Este es mi primer checkbox</label><br>

<input type="checkbox" id="cbox2" value="second_checkbox"> <label for="cbox2">Este es mi segundo checkbox</label>} */
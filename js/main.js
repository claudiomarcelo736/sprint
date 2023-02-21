const productos = [
    {imagen: 'img/notebook.jpeg', nombre: 'Notebook Acer 14"', descripcion: "Un equipo perfecto para trabajar en la marcha gracias a su versatilidad, poder de procesamiento y vida útil de la batería.", precio: 500000},
    {imagen: 'img/mouse.webp', nombre: 'mouse', descripcion: "mouse gamer alambrico", precio: 70000},
    {imagen: 'img/teclado.webp', nombre: 'teclado', codigo: 3, descripcion: "teclado ergonometrico con retroiluminacion", precio: 100000},
    {imagen: 'img/monitor.jpg', nombre: 'monitor', codigo: 4, descripcion: "monitor pantalla plana 21", precio: 200000},
    {imagen: 'img/celular.jpg', nombre: 'celular', codigo: 5, descripcion: "celular iphone 13", precio: 700000},
    {imagen: 'img/disco duro externo.jpg', nombre: 'disco externo', codigo: 6, descripcion: "disco externo de 2 terabit", precio: 190000},
    {imagen: 'img/pendrive.jpg', nombre: 'pen drive', codigo: 7, descripcion: "pen drive 256", precio: 50000},
    {imagen: 'img/ventilador.webp', nombre: 'ventilador', codigo: 8, descripcion: "ventilador para notebook con dos aspas", precio: 70000},
    {imagen: 'img/modem.jfif', nombre: 'modem', codigo: 9, descripcion: "modem marca IRT", precio: 70000},
    {imagen: 'img/proyector.webp', nombre: 'proyector', codigo: 10, descripcion: "mini proyector inalambrico", precio: 250000}
]

const formatoPesoCLP = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
})

/*  Referenciar contenedor de productos con DOM */
const mostrador = document.getElementsByClassName('mostrador');

/* Ciclo for para rellenar todos los articulos de var productos */
for(i = 0; i < productos.length; i++) {
    /*  Div del Producto */
    const articuloProducto = document.createElement('div');
    articuloProducto.classList.add('col-lg-4');
    /*  Imágen del Producto */
    const imagenProducto = document.createElement('img');
    imagenProducto.src = productos[i].imagen;
    imagenProducto.classList.add('bd-placeholder-img', 'rounded-circle');
    imagenProducto.setAttribute('width', 140);
    imagenProducto.setAttribute('height', 140);
    imagenProducto.setAttribute('focusable', 'false');
    imagenProducto.alt = productos[i].descripcion;
    /*  Nombre y Modelo del Producto */
    const nombreProducto = document.createElement('h2');
    nombreProducto.classList.add('fw-normal');
    nombreProducto.textContent = productos[i].nombre;
    /*  Descripción Larga del Producto
        Por mientras se usará la descripción sencilla. */
    const descripcionProducto = document.createElement("p");
    descripcionProducto.textContent = productos[i].descripcion;
    //  Precio del producto
    const precioProducto = document.createElement("h2");
    precioProducto.classList.add('fw-normal');
    precioProducto.textContent = "Precio: " + formatoPesoCLP.format(productos[i].precio);
    //  Selector y cantidad del producto
    const selectorProducto = document.createElement("div");
    selectorProducto.classList.add('selectorProducto');
    // Cajita de marca de producto
    const casillaProducto = document.createElement("input");
    casillaProducto.setAttribute('type', 'checkbox');
    casillaProducto.classList.add('casillaProducto');
    casillaProducto.addEventListener('change', agregarCarrito);
    // Cantidad de Producto
    const cantidadProducto = document.createElement('input');
    cantidadProducto.classList.add('cantidadProducto');
    cantidadProducto.setAttribute('type', 'number');
    cantidadProducto.setAttribute('step', '1');
    cantidadProducto.setAttribute('maxLength', '1');
    cantidadProducto.setAttribute('min', '0');
    cantidadProducto.setAttribute('max', '9');
    cantidadProducto.setAttribute('value', 0);
    cantidadProducto.addEventListener('change', agregarCarrito);

    /* Agregar elementos al articuloProducto */
    articuloProducto.appendChild(imagenProducto);
    articuloProducto.appendChild(nombreProducto);
    articuloProducto.appendChild(descripcionProducto);
    articuloProducto.appendChild(precioProducto);
    selectorProducto.appendChild(casillaProducto);
    selectorProducto.appendChild(cantidadProducto);
    articuloProducto.appendChild(selectorProducto);

    /* Agregar articuloProducto al mostrador */
    mostrador[0].appendChild(articuloProducto);
}

let carrito = [];

function agregarCarrito() {
    alert('Modifica Carrito');
}


/* { <label><input type="checkbox" id="cbox1" value="first_checkbox"> Este es mi primer checkbox</label><br>

<input type="checkbox" id="cbox2" value="second_checkbox"> <label for="cbox2">Este es mi segundo checkbox</label>} */
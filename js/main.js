const productos = [
    {imagen: 'img/notebook.jpeg', nombre: 'Notebook Eiser 14"', descripcion: "Un equipo perfecto para trabajar en la marcha gracias a su versatilidad, poder de procesamiento y vida útil de la batería.", precio: 500000},
    {imagen: 'img/mouse.webp', nombre: 'Mouse Longitek', descripcion: "Con sensor óptico óptimo para trabajos de precisión.", precio: 70000},
    {imagen: 'img/teclado.webp', nombre: 'Teclado Renpragon', descripcion: "Teclado ergonómico con retroiluminación para uso nocturno.", precio: 100000},
    {imagen: 'img/monitor.jpg', nombre: 'Monitor EMESEÍ', descripcion: "Pantalla plana de 21\" con panel tipo VA y 75 hercios de frecuencia de actualización, el paquete completo para cualquiera sea su necesidad.", precio: 200000},
    {imagen: 'img/celular.jpg', nombre: 'iPhone 13', descripcion: "Relájate, es iPhone.", precio: 700000},
    {imagen: 'img/disco duro externo.jpg', nombre: 'Disco Externo BData', descripcion: "2 Terabytes de capacidad, el último disco externo que necesitarás.", precio: 190000},
    {imagen: 'img/pendrive.jpg', nombre: 'Pendrive SanDisco', descripcion: "Quién diría que 256 Gigabytes pudieran verse tan bien en su llavero.", precio: 50000},
    {imagen: 'img/ventilador.webp', nombre: 'Ventilador DipCul', descripcion: "1400 RPM, ofreciendo potencia de enfriamiento y un silencio pulcro.", precio: 70000},
    {imagen: 'img/modem.jfif', nombre: 'Punto de Acceso EstLand', descripcion: "WiFi, hecho fácil con su tecnología patentada \"Zero Config AP\".", precio: 70000},
    {imagen: 'img/Proyector.webp', nombre: 'Proyector LANIX', descripcion: "Un modelo clásico pero confiable.", precio: 250000}
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

const seleccionProductos = document.getElementsByClassName('selectorProducto');
let detalleProductosCarrito = new Array();
const listaProductos = document.getElementById('listadoCarrito');

function agregarCarrito() {
    let subtotal = 0;
    let subtotalIVA = 0;
    let totalCarrito = 0;
    let costoEnvio = 0;
    let costoIVA = 0;
    detalleProductosCarrito = [];
    listaProductos.innerHTML = '';
    // Recorrer listado de productos para ver que se agregó al carrito de compra
    for (let i = 0; i < seleccionProductos.length; i++) {
        // Verifica si la casilla está marcada
        if(seleccionProductos[i].children[0].checked == true) {
            // Verifica que la cantidad no sea 0
            if (seleccionProductos[i].children[1].value != 0) {
                // Agregar precio de productos y cantidad al subtotal
                subtotal += (productos[i].precio * seleccionProductos[i].children[1].value);
                //Agregar código al arreglo para crear lista de productos en carrito
                for(i2 = 0; i2 < seleccionProductos[i].children[1].value; i2++) {
                    detalleProductosCarrito.push(i);
                }
            }
            else;
        } else;
    }
    // Creación de Listado de Carrito
    for(i = 0; i < detalleProductosCarrito.length; i++) {
        // Crea un elemento de lista
        const elementoListaCarrito = document.createElement('li');
        elementoListaCarrito.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
        // Crea el DIV que contendrá el nombre y precio
        const div1ElementoListaCarrito = document.createElement('div');
        div1ElementoListaCarrito.classList.add('ms-2', 'me-auto');
        // Crea el DIV que tendrá el nombre
        const div2ElementoListaCarrito = document.createElement('div');
        div2ElementoListaCarrito.classList.add('fw-bold');
        div2ElementoListaCarrito.textContent = productos[detalleProductosCarrito[i]].nombre;
        // Crea el span que tendrá el precio
        const div3ElementoListaCarrito = document.createElement('span');
        div3ElementoListaCarrito.textContent = formatoPesoCLP.format(productos[detalleProductosCarrito[i]].precio);
        // Agrega el nombre al contenedor
        div1ElementoListaCarrito.appendChild(div2ElementoListaCarrito);
        // Agrega el precio al contenedor
        div1ElementoListaCarrito.appendChild(div3ElementoListaCarrito);
        // Agrega el contenedor al elemento de lista
        elementoListaCarrito.appendChild(div1ElementoListaCarrito);
        // Agrega el elemento de lista al documento principal HTML
        listaProductos.appendChild(elementoListaCarrito);
    }
    // Cálculo de montos totales
    document.getElementById('subtotalCarrito').textContent = formatoPesoCLP.format(subtotal);
    costoIVA = subtotal * 0.19;
    document.getElementById('ivaCarrito').textContent = formatoPesoCLP.format(costoIVA);
    subtotalIVA = subtotal * 1.19;
    // Cálculo de 5% de envío bajo los $100.000
    if (subtotalIVA > 100000) {
        document.getElementById('envioCarrito').textContent = formatoPesoCLP.format(costoEnvio);
    } else {
        costoEnvio = subtotalIVA * 0.05;
        document.getElementById('envioCarrito').textContent = formatoPesoCLP.format(costoEnvio);
    }
    totalCarrito = subtotalIVA + costoEnvio;
    document.getElementById('totalCarrito').textContent = formatoPesoCLP.format(totalCarrito);
}
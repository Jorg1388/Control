import { obtenerProductos } from "../../control/miLocalStorange.js";

export function listaCarrito() {
    let seccion = document.createElement('section');
    seccion.className = "carrito";

    let recuperarProductos = obtenerProductos();

    recuperarProductos.forEach((element, index) => {
        // div general para el producto
        let divProducto = document.createElement('div');
        divProducto.className = "producto";

        // div para la imagen
        let divImagen = document.createElement('div');
        divImagen.className = "producto-imagen";

        let img = document.createElement('img');
        img.src = element.img;
        img.alt = element.nombre;

        divImagen.appendChild(img);

        // p para nombre
        let pNombre = document.createElement('p');
        pNombre.className = "producto-nombre";
        pNombre.textContent = element.nombre;

        // p para precio
        let pPrecio = document.createElement('p');
        pPrecio.className = "producto-precio";
        pPrecio.textContent = `$${element.precio}`;
        
        //botón de eliminar
        let eliminar = document.createElement('span');
        eliminar.className = "producto-eliminar";
        eliminar.textContent = "❌";

        //accion eliminar 
        eliminar.addEventListener("click", () => {
            divProducto.remove();
            //configuración para local
            let productos = obtenerProductos();
            productos.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(productos));
        })

        // añadir todo al div en general
        divProducto.appendChild(divImagen);
        divProducto.appendChild(pNombre);
        divProducto.appendChild(pPrecio);
        divProducto.appendChild(eliminar);

        // añadir al section
        seccion.appendChild(divProducto);

        
    });

    return seccion;
}

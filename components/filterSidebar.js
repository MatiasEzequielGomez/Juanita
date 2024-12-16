import { cardComponent } from "./card.js";

// Función para filtrar y ordenar los productos
const filtrarYOrdenarProductos = (productos, subcategoriaSeleccionada, ordenSeleccionado) => {
    // Filtrar por subcategoría si no se seleccionó "Todas"
    let productosFiltrados = subcategoriaSeleccionada === "Todas"
        ? productos
        : productos.filter(producto => producto.subcategoria === subcategoriaSeleccionada);

    // Ordenar por precio
    if (ordenSeleccionado === "menor-mayor") {
        productosFiltrados.sort((a, b) => a.price - b.price);
    } else if (ordenSeleccionado === "mayor-menor") {
        productosFiltrados.sort((a, b) => b.price - a.price);
    }

    return productosFiltrados;
};

// Lógica del sidebar
export const setupSidebarFilters = (productosOriginales) => {
    const ordenPrecio = document.getElementById("ordenPrecio");
    const filtrarCategoria = document.getElementById("FiltrarCategoria");
    const buscarFiltro = document.getElementById("BuscarFiltro");
    const cardContainer = document.getElementById("cardContainer");

    // Manejar el evento del botón "Buscar"
    buscarFiltro.addEventListener("click", () => {
        const subcategoriaSeleccionada = filtrarCategoria.value;
        const ordenSeleccionado = ordenPrecio.value;

        // Filtrar y ordenar los productos
        const productosFiltradosYOrdenados = filtrarYOrdenarProductos(
            productosOriginales,
            subcategoriaSeleccionada,
            ordenSeleccionado
        );

        // Generar las tarjetas filtradas y actualizarlas en el contenedor
        const cardsHTML = productosFiltradosYOrdenados.map((producto, index) =>
            cardComponent(producto, index)
        ).join('');
        cardContainer.innerHTML = cardsHTML;
    });
};

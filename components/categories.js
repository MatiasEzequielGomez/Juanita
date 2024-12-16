import { cardComponent } from "./card.js";
import { decreaseQuantity, increaseQuantity } from "./variationQuantity.js";
import { setupSidebarFilters } from "./filterSidebar.js";

let cardContainer = document.getElementById('cardContainer');

window.addEventListener('load', () => {
    const categoria = cardContainer.getAttribute('data-category');
    const subcategorias = cardContainer.getAttribute('data-subcategory').split(',');

    const cardsPromises = subcategorias.map(subcategoria =>
        fetch('../../../api/json_cards/products.json')
            .then(response => response.json())
            .then(data => {
                return data[categoria][subcategoria].map(i => ({
                    title_card: i.ProductName,
                    url_img: i.urlImage,
                    description: i.description,
                    price: i.price,
                    initialQuantity: 0,
                    subcategoria // Agregar subcategoría para el filtrado
                }));
            })
            .catch(error => {
                console.error(`Error al cargar la subcategoría ${subcategoria}:`, error);
                return [];
            })
    );

    Promise.all(cardsPromises)
        .then(results => {
            // Combina los datos de todas las subcategorías
            const allCards = results.flat();

            // Genera el contenido de las tarjetas
            const cardsHTML = allCards.map((e, index) => cardComponent(e, index)).join('');
            cardContainer.innerHTML = cardsHTML;

            // Configurar el filtro del sidebar
            setupSidebarFilters(allCards);

            // Agrega los eventos a los botones
            const btnsQuit = document.querySelectorAll('.btn-quit');
            const btnsAdd = document.querySelectorAll('.btn-add');

            btnsQuit.forEach(btnQuit => {
                btnQuit.addEventListener('click', decreaseQuantity);
            });

            btnsAdd.forEach(btnAdd => {
                btnAdd.addEventListener('click', increaseQuantity);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
});

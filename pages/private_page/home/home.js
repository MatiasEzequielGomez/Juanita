import { cardComponent } from "../../../components/card.js";
import { decreaseQuantity, increaseQuantity, updateQuantity } from "../../../components/variationQuantity.js";
let cardContainer = document.getElementById('cardContainer');
let cardData = [];

window.addEventListener('load', () => {
    fetch('../../../api/json_cards/products.json')
        .then(response => response.json())
        .then(data => {
            cardData = [];

            // Iterar por las categorías principales
            ['Hombres', 'Mujeres', 'Niños'].forEach(categoria => {
                if (data[categoria]) {
                    // Obtener las subcategorías de cada categoría
                    Object.keys(data[categoria]).forEach(subcategoria => {
                        const productosSubcategoria = data[categoria][subcategoria]
                            .slice(0, 3) // Limitar a los primeros 3 productos
                            .map(i => ({
                                title_card: i.ProductName,
                                url_img: i.urlImage,
                                description: i.description,
                                price: i.price,
                                initialQuantity: 0
                            }));

                        // Añadir los productos de la subcategoría a los datos generales
                        cardData = cardData.concat(productosSubcategoria);
                    });
                }
            });

            // Generar las tarjetas
            const cards = cardData.map((e, index) => cardComponent(e, index)).join('');
            cardContainer.innerHTML = cards;

            // Agregar los eventos a los botones
            const btnsQuit = document.querySelectorAll('.btn-quit');
            const btnsAdd = document.querySelectorAll('.btn-add');

            btnsQuit.forEach(btnQuit => {
                btnQuit.addEventListener('click', decreaseQuantity);
            });

            btnsAdd.forEach(btnAdd => {
                btnAdd.addEventListener('click', increaseQuantity);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});


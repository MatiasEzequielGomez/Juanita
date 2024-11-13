import { cardComponent } from "../components/card.js";
import { decreaseQuantity } from "../components/variationQuantity.js";
import { increaseQuantity } from "../components/variationQuantity.js";
import { updateQuantity } from "../components/variationQuantity.js";

let cardContainer = document.getElementById('cardContainer');
let cardData = [];

window.addEventListener('load', () => {
    fetch('../components/json_cards/products.json')
        .then(response => response.json())
        .then(data => {
            cardData = [];
            ['Hombres', 'Mujeres', 'Niños'].forEach(categoria => {
                if (data[categoria]) {
                    const productosCategoria = data[categoria].slice(0, 3).map(i => ({
                title_card: i.ProductName,
                url_img: i.urlImage,
                description: i.description,
                price: i.price,
                initialQuantity: 0 
            }));
            cardData = cardData.concat(productosCategoria);
        }
    });
            const cards = cardData.map((e, index) => cardComponent(e, index)).join('');
            cardContainer.innerHTML = cards;

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

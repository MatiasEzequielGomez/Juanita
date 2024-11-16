import { cardComponent } from "../components/card.js";
import { decreaseQuantity, increaseQuantity, updateQuantity } from "../components/variationQuantity.js";


let cardContainer = document.getElementById('cardContainer');
let cardData = [];

window.addEventListener('load', () => {
    const categoria = cardContainer.getAttribute('data-category');

    fetch('../components/json_cards/products.json')
        .then(response => response.json())
        .then(data => {
            cardData = data[categoria].map(i => ({
                title_card: i.ProductName,
                url_img: i.urlImage,
                description: i.description,
                price: i.price,
                initialQuantity: 0 
            }));

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

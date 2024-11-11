import { cardComponent } from "../components/card.js";
import { decreaseQuantity } from "../components/variationQuantity.js";
import { increaseQuantity } from "../components/variationQuantity.js";
import { updateQuantity } from "../components/variationQuantity.js";

let cardContainer = document.getElementById('cardContainer');

let quantity = 0;

let cardData = [
    {title_card: 'Bombacha vedetina', url_img: 'producto.webp', description: 'Intimewear vedetina encaje cintura', price: '$7900', initialQuantity: quantity},
    {title_card: 'Bombacha vedetina', url_img: 'producto.webp', description: 'Intimewear vedetina encaje cintura', price: '$7900', initialQuantity: quantity},
    {title_card: 'Bombacha vedetina', url_img: 'producto.webp', description: 'Intimewear vedetina encaje cintura', price: '$7900', initialQuantity: quantity},
    {title_card: 'Bombacha vedetina', url_img: 'producto.webp', description: 'Intimewear vedetina encaje cintura', price: '$7900', initialQuantity: quantity},
    {title_card: 'Bombacha vedetina', url_img: 'producto.webp', description: 'Intimewear vedetina encaje cintura', price: '$7900', initialQuantity: quantity},
    {title_card: 'Bombacha vedetina', url_img: 'producto.webp', description: 'Intimewear vedetina encaje cintura', price: '$7900', initialQuantity: quantity}
];

window.addEventListener('load', () => {
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
});


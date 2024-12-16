import { cardCartComponent } from "./card-Cart.js";
import { getData, setData, deleteCollection } from "../../../utils/localStorage.controller.js";

let cardContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const btnBuy = document.getElementById("btn-buy");
const btnCancel = document.getElementById('btn-cancel');



window.addEventListener("load", () => {
    renderCart(); // Llama a la función para renderizar el carrito al cargar la página
});

function renderCart() {
    const items = getData("itemsData") || []; // Recupera los datos del localStorage o un array vacío
    if (items.length > 0) {
        // Genera los datos de las tarjetas
        const cardData = items.map((i) => ({
            name: i.name,
            price: i.price,
            quantity: i.quantity,
            subtotal: i.subtotal,
        }));

        // Renderiza las tarjetas
        const cards = cardData
            .map((e, i) => cardCartComponent(e, i))
            .join("");
        cardContainer.innerHTML = cards;

        // Agrega eventos a los botones de eliminar
        const btnDelete = document.querySelectorAll(".btn-delete");
        btnDelete.forEach((button, i) => {
            button.addEventListener("click", () => {
                deleteItem(i);
            });
        });

        // Calcula y muestra el total (si es necesario en el futuro)
        const total = cardData.reduce((acc, i) => acc + i.subtotal, 0);
        cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
    } else {
        cardContainer.innerHTML = `<tr><td colspan="4">No hay productos en el carrito.</td></tr>`;
        cartTotalElement.textContent = ""; // Limpia el total si no hay productos
    }
}

function deleteItem(i) {
    // Recupera los datos del localStorage
    const items = getData("itemsData") || [];

    // Verifica que el índice sea válido
    if (i >= 0 && i < items.length) {
        // Elimina el elemento del array
        items.splice(i, 1);

        // Actualiza el localStorage
        setData("itemsData", items);

        // Re-renderiza el carrito
        renderCart();
    } else {
        console.error("Índice inválido para eliminar un elemento.");
    }
}

btnBuy.addEventListener("click", () => {
        alert("¡Compra realizada con éxito!");
        setData("itemsData", []); // Vaciar el carrito después de la compra
        renderCart([]); // Renderizar el carrito vacío
        window.location.href = '../home/home.html';
    });

    btnCancel.addEventListener('click', () => {
        deleteCollection("itemsData"); // Usa la clave que realmente estás utilizando para el carrito
        renderCart(); // Re-renderiza el carrito vacío
        window.location.href = '../home/home.html';
    });
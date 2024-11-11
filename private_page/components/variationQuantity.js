export const updateQuantity = (cardElement, newQuantity) => {
    const quantityElement = cardElement.querySelector('.cant');
    if (quantityElement) {
        quantityElement.textContent = newQuantity;
    }
};


export const increaseQuantity = (event) => {
    const cardElement = event.target.closest('.card-product'); 
    const quantityElement = cardElement.querySelector('.cant');
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    currentQuantity++;
    updateQuantity(cardElement, currentQuantity);
};


export const decreaseQuantity = (event) => {
    const cardElement = event.target.closest('.card-product'); 
    const quantityElement = cardElement.querySelector('.cant');
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    if (currentQuantity > 0) {
        currentQuantity--;
        updateQuantity(cardElement, currentQuantity);
    }
};
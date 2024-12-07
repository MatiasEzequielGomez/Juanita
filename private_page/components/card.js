const url = 'http://127.0.0.1:5501/Assets/Images/'
export const cardComponent = (data) => {
    return `
        <div class="card-product">
            <h3>${data.title_card}</h3>
            <img src="${url}${data.url_img}" alt="Imagen del producto">
            <div class="desc">
                <p>${data.description}</p>
            </div>
            <p class="price">${data.price}</p>
            <div class="card-footer">
                <button class="btn-quit">-</button>
                <p class="cant">${data.initialQuantity}</p>
                <button class="btn-add">+</button>
            </div>
            <button class="btn">Añadir al carrito</button>
        </div>
    `;
};

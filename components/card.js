const url = 'http://127.0.0.1:5501/Assets/Images/'
export const cardComponent = (data) => {
    return `
        <div class="card-product">
            <h3 id="product" class="producto">${data.title_card}</h3>
             <div class="image-container">
             <img src="${url}${data.url_img}" alt="Imagen del producto">
             </div>
             <div class="desc">
                <p>${data.description}</p>
            </div>
            <p id="precio" class="price">$${data.price}</p>
            <div class="card-footer">
                <button class="btn-quit">-</button>
                <p id="cantidad" class="cant">${data.initialQuantity}</p>
                <button class="btn-add">+</button>
            </div>
            <button id="btnAdd" class="btn-add-to-cart btn">Añadir al carrito</button>
        </div>
    `;
};

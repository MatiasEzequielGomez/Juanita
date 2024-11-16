export const cardCartComponent = (data) => {
    return `
        <tr class="card-Cart-product">
            <td>${data.name}</td>
            <td>$${data.price.toFixed(2)}</td>
            <td>${data.quantity}</td>
            <td>$${data.subtotal.toFixed(2)}</td>
            <td>
                <button class="btn-delete btn" id="btn-delete">Eliminar</button>
            </td>
        </tr>
    `;
};
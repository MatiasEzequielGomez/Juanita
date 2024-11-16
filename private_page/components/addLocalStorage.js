import { getData, setData} from "../../../utils/localStorage.controller.js"

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function() {
        const btnAdd = document.querySelectorAll('.btn-add-to-cart');

        if (btnAdd) {
            // Cargar los datos del localStorage al cargar la página
            window.addEventListener('load', () => {
                const items = getData('itemsData');
                console.log(items);
            });

            // Iterar sobre cada botón para asignar un evento
            btnAdd.forEach((button) => {
                button.addEventListener('click', (event) => {
                    // Usar el botón clickeado como referencia
                    const card = event.target.closest('.card-product');
                    
                    const producto = card.querySelector('.producto').textContent;
                    const precio = parseFloat(card.querySelector('.price').textContent.replace('$', '').trim());
                    const cantidad = parseInt(card.querySelector('.cant').textContent.trim(), 10);


                    const newItem = { 
                        name: producto, 
                        price: precio, 
                        quantity: cantidad,
                        subtotal: precio*cantidad
                    };

                    const items = getData('itemsData');
                    items.push(newItem);

                    setData('itemsData', items);
                    console.log(`Producto añadido: ${producto}`);
                });
            });
        } else {
            console.error("No se encontraron elementos con la clase '.btn-add-to-cart'.");
        }
    }, 100); // Espera 100ms antes de ejecutar el código
});

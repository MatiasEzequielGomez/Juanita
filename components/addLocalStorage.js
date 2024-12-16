import { getData, setData} from "../../utils/localStorage.controller.js"

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
                    const userLoggedIn = sessionStorage.getItem('userLoggedIn');
        if (!userLoggedIn) {
            alert('Debe iniciar sesión para añadir productos al carrito.');
            window.location.href = '../../../pages/public_page/login/login.html';
            return;
        }
                    // Usar el botón clickeado como referencia
                    const card = event.target.closest('.card-product');
                    
                    const producto = card.querySelector('.producto').textContent;
                    const precio = parseFloat(card.querySelector('.price').textContent.replace('$', '').trim());
                    const cantidadElement = card.querySelector('.cant');
                    const cantidad = parseInt(card.querySelector('.cant').textContent.trim(), 10);

                    if (cantidad === 0) {
                        alert('Por favor añada una cantidad para agregar al carrito.');
                        return;
                    }

                    const newItem = { 
                        name: producto, 
                        price: precio, 
                        quantity: cantidad,
                        subtotal: precio*cantidad
                    };

                    const items = getData('itemsData');
                    items.push(newItem);

                    setData('itemsData', items);
                     // Mostrar mensaje de confirmación
                     alert('Producto añadido al carrito.');

                     // Reiniciar la cantidad a 0
                     cantidadElement.textContent = '0';
                });
            });
        } else {
            console.error("No se encontraron elementos con la clase '.btn-add-to-cart'.");
        }
    }, 100); // Espera 100ms antes de ejecutar el código
});

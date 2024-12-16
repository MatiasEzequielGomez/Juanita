Final de Aplicaciones Web 1

Mejoras del proyecto:
1) Se agrega sidebar para el home que nos envía a las categorías de los productos
2) Se agrega sidebar para cada categoría que ordena productos por precio, ascendente o descendente, y filtra por subcategoría
3) Se agrega un footer con las redes del negocio, datos de contacto y menú con enlace a las categorías
4) Para que los usuarios no logueados no puedan agregar productos al carrito, se agrega un condicional para comprobar que, si no hay datos en Session storage, sean redirijidos a login.html para loguearse. Así mismo, no pueden agregar productos cuando la cantidad es 0
5) Se agrega evento al botón de cierre de sesión para que limpie Session storage y Local storage cuando se haga click y el usuario sea redirijido al home

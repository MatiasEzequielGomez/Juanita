import {sidebarHTML} from "./sidebarHTML.js";


document.addEventListener('DOMContentLoaded', () => {
    // Insertar el sidebar en el contenedor
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = sidebarHTML;
});
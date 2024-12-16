import { sidebarHomeHTML } from "./sidebarHomeHTML.js";

document.addEventListener('DOMContentLoaded', () => {
    // Insertar el sidebar en el contenedor
    const sidebar = document.getElementById('sidebarHome');
  
        sidebar.innerHTML = sidebarHomeHTML;
 
});
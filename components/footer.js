import {footerHTML} from "./footerHTML.js";


document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');
    footer.innerHTML = footerHTML;
});
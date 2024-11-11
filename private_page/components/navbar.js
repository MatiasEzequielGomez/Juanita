const url = 'http://127.0.0.1:5501/'

const navElements = [
    {title:'Mujeres', link:`${url}private_page/mujeres/mujeres.html`},
    {title:'Hombres', link:`${url}private_page/hombres/hombres.html`},
    {title:'Niños', link:`${url}private_page/niños/niños.html`},
]



export const navBar=` <nav class="navbar flex-nv">
                <ul class="flex-item-nv flex-ctg">
                    <li class="flex-item-ctg">
                        <a class="li-hover" href="../../index.html">
                            <img class="icon" rel="icon" type="image/icon" src="../../Assets/Images/Logo-Juanita.ico" alt="Logo de la tienda">
                        </a>
                    </li>
                   
                 ${
                    navElements.map(e=>{
                        return `
                        <li class="flex-item-ctg">
                            <a class="ctg" href=${e.link}>${e.title}</a>
                        </li>
                        `;
                    }).join('')
                 }
                </ul>
              <div class="flex-item-nv flex-btn">
        <a class="flex-item-btn btn" href="http://127.0.0.1:5501/public_page/login/login.html">Ingresar</a>
        <button id="logOut" class="flex-item-btn btn">Cerrar sesión</button>
    </div>
            </nav>`;
            
            

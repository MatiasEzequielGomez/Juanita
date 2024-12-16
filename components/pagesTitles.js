let pageName = document.getElementById('pageName').value
let title = document.getElementById('title')

window.addEventListener('load', ()=>{ 
    title.textContent = pageName
    document.title = pageName
})
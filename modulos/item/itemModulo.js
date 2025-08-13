export function item(titulo,urlImg){

    let item = document.createElement('div');
    item.className = "item";
    item.textContent = titulo;
    
    let img = document.createElement('img');
    img.src = urlImg;
    item.appendChild(img);

    item.addEventListener('click', ()=>{
            item.classList.add("verde");
            let header = document.querySelector('.header');
            header.classList.add("ocultar");
    });

    return item;
}
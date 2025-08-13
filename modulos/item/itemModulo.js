export function item(titulo,urlImg){

    let item = document.createElement('div');
    item.className = "item";
    item.textContent = titulo;

    let titulo = document.createElement("h1");
    titulo.className = "titulo-1"
    titulo.textContent = "Fornite";
    item.appendChild(titulo);

    let img1 = document.createElement("img");
    img.className = "img-1"
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5CorIH-tM2DD063Yjeariha5F_lIYmuAMVQ&s"
    item.appendChild(img);

    let p = document.createElement('p');
    p.textContent = "Fortnite es un videojuego multijugador de acción y supervivencia donde los jugadores luchan entre sí en un mundo abierto, construyen estructuras y compiten para ser el último en pie.";
    item.appendChild(p)
    


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
export function header(){

    let header = document.createElement('header');
    header.className = "header-contenedor";

    let text = document.createElement('text');
    text.innerText = "Jorge";

    let div = document.createElement('div');
    div.className = "circulo";
   
    header.appendChild(text);
    header.appendChild(div);
    return header;
}

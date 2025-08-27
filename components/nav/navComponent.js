export function nav() {
    
    let nav = document.createElement('div');
    nav.className = "nav";
    
    let div1 = document.createElement('div');
    div1.className = "cuadros";
    div1.textContent = "🏠";
    nav.appendChild(div1);
    
    let div2 = document.createElement('div');
    div2.className = "cuadros";
    div2.textContent = "📦";
    nav.appendChild(div2);

    let div3 = document.createElement('div');
    div3.className = "cuadros";
    div3.textContent = "❓";
    nav.appendChild(div3);

    let div4 = document.createElement('div');
    div4.className = "cuadros";
    div4.textContent = "🛒";
    nav.appendChild(div4);

    return nav;
}
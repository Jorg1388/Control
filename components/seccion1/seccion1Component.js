import { item } from "../../modulos/item/itemModulo.js";

export function seccion1 (){

    let seccion1 = document.createElement('seccion1');
    seccion1.className = "seccion-1";

    let spiderman = [
        ["Spiderman1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQez8wx82M87bp6pTy3lkDXJF31Md6LyanfqA&s"],
        ["Spiderman2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi50Evzzq3k7UM_htQhSZBN0ufPR_rmW5oJn2phB2YEOYycp3Qt6_GGWR3XSl7YFPAX08&usqp=CAU"],
        ["Spiderman3", "https://wallpapers.com/images/hd/spiderman-background-oycfyb1ksermw921.jpg"],
        ["Spiderman4", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKlR3MtIxnaOL5HXJZFffdqlreXlGTdCRPv_sR5NAXDhFYO1Ug-fzRFjilZAnsiAUEO8&usqp=CAU"]
    ];

    spiderman.forEach(element => {
        seccion1.appendChild(item(element[0],element[1]));
    });



    return seccion1;
}
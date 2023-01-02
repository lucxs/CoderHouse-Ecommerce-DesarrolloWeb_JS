//Trayendo del Storage:

 let prod1Recuperado = localStorage.getItem("prod1");
 let prod2Recuperado = localStorage.getItem("prod2");
 let prod3Recuperado = localStorage.getItem("prod3");

 if(prod1Recuperado && prod2Recuperado && prod3Recuperado != null){

    let prod1 = JSON.parse(prod1Recuperado);
    let prod2 = JSON.parse(prod2Recuperado);
    let prod3 = JSON.parse(prod3Recuperado);

        addingNode(prod1);
        addingNode(prod2);
        addingNode(prod3);
        Subtotal(prod1, prod2, prod3);

    
 }
 else{
    ///////////////////////////
 }

 function addingNode(prodx){
    let elemento = document.createElement("div");

 elemento.setAttribute("class","carrito__contenedor__prod__card1");
 
 elemento.innerHTML = `
                     <img src=.${prodx.img} alt=${prodx.imgAlt} class="carrito__contenedor__prod__card1Img">
                     <p class="productos__descripcion">
                         ${prodx.description}
                     </p>
                     <p class="productos__precio">
                     <span>$</span>${prodx.precio}
                     </p>
                     <select class="productos__select">
                     <option value class="productos__option="1">1</option>
                     <select>
 `;
 
 document.getElementById("cardProd").append(elemento);}

 
 function Subtotal(prodx1, prodx2, prodx3){
      let suma = parseFloat(prodx1.precio) + parseFloat(prodx2.precio) + parseFloat(prodx3.precio);
      let element = document.createElement("div");
      element.setAttribute("class", "carrito__subtotal");
      element.innerHTML =` <p class="carrito__subtotal__p1">
                                 subtotal: 
                           </p>
                            <p class="carrito__subtotal__precio1">
                            ${suma}$
                           </p>
                            <p class="carrito__subtotal__p2">
                                 Descuento:
                           </p>
                            <p class="carrito__subtotal__precio2">
                                 0.00$
                           </p>
                            <p class="carrito__subtotal__p3">
                                 Costo de envio:
                           </p>
                            <p class="carrito__subtotal__precio3">
                                 0.00$
                           </p>
                           `;
            document.getElementById("cardSubt").append(element);


 }
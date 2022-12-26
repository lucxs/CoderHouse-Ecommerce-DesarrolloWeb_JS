//Evento disparador del btn producto 1, 2 y 3 - index.html
let btnprod1 = document.getElementById("btnProd1");
let btnprod2 = document.getElementById("btnProd2");
let btnprod3 = document.getElementById("btnProd3");


//Almacenando en storage

localStorage.setItem("btn1", btnprod1);



//nodo del prod1 -2 - 3
let prod1 = document.getElementById("prod1");
let prod2 = document.getElementById("prod2");
let prod3 = document.getElementById("prod3")

//Evento para botón
btnprod1.addEventListener("click", () =>{

    let img = prod1.children[1].attributes[0].nodeValue;
    let imgAlt = prod1.children[1].attributes[1].nodeValue;
    let description = prod1.children[2].innerText;
    let precio =prod1.children[3].innerText;

    //Esto es para hacer testeo de funcionalidad
    /*console.log(prod1);
    console.log( img," - ", description," - ", precio);*/

    let produ1 = new Producto(img, imgAlt, description, precio);

 produ1.addingNode(); 

    
} );

//Evento para botón
btnprod2.addEventListener("click", () =>{

    let img = prod2.children[1].attributes[0].nodeValue;
    let imgAlt = prod2.children[1].attributes[1].nodeValue;
    let description = prod2.children[2].innerText;
    let precio =prod2.children[3].innerText;

    let produ2 = new Producto(img, imgAlt, description, precio);

 produ2.addingNode(); 

} );

btnprod3.addEventListener("click", () =>{

    let img = prod3.children[1].attributes[0].nodeValue;
    let imgAlt = prod3.children[1].attributes[1].nodeValue;
    let description = prod3.children[2].innerText;
    let precio =prod3.children[3].innerText;


    let produ3 = new Producto(img, imgAlt, description, precio);

        produ3.addingNode(); 

    
} );


class Producto {

    constructor(img, imgAlt, description, precio){
        this.img = img,
        this.imgAlt = imgAlt,
        this.description = description,
        this.precio = precio;
    }

    addingNode(){
        let elemento = document.createElement("div");

    elemento.setAttribute("class","carrito__contenedor__prod__card1");
    
    elemento.innerHTML = `
                        <img src=${this.img} alt=${this.imgAlt} class="carrito__contenedor__prod__card1Img">
                        <p class="productos__descripcion">
                            ${this.description}
                        </p>
                        <p class="productos__precio">
                            ${this.precio}
                        </p>
    `;
    
    document.getElementById("carro1234").append(elemento);

    }
}

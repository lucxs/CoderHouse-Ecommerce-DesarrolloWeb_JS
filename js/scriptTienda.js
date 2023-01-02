//Evento disparador del btn de productos 
let btnprod1 = document.getElementById("btnProd1");
let btnprod2 = document.getElementById("btnProd2");
let btnprod3 = document.getElementById("btnProd3");
let btnprod4 = document.getElementById("btnProd4");
let btnprod5 = document.getElementById("btnProd5");
let btnprod6 = document.getElementById("btnProd6");

//nodo del prod
let prod1 = document.getElementById("prod1");
let prod2 = document.getElementById("prod2");
let prod3 = document.getElementById("prod3");
let prod4 = document.getElementById("prod4");
let prod5 = document.getElementById("prod5");
let prod6 = document.getElementById("prod6");

//Evento para botones de productos

btnprod1.addEventListener("click", () =>{

    let img = prod1.children[1].attributes[0].nodeValue;
    let imgAlt = prod1.children[1].attributes[1].nodeValue;
    let description = prod1.children[2].innerText;
    let precio =prod1.children[3].lastChild.data;

    //Isntanciando objeto
    let producto1 = new Producto(img, imgAlt, description, precio);

    //cargando a storage
    producto1ToJSON = JSON.stringify(producto1)
    localStorage.setItem("prod1",producto1ToJSON);

    
} );

btnprod2.addEventListener("click", () =>{

    let img = prod2.children[1].attributes[0].nodeValue;
    let imgAlt = prod2.children[1].attributes[1].nodeValue;
    let description = prod2.children[2].innerText;
    let precio =prod2.children[3].lastChild.data;

    //Isntanciando objeto
    let producto2 = new Producto(img, imgAlt, description, precio);

    //cargando a storage
    
    producto2ToJSON = JSON.stringify(producto2)
    localStorage.setItem("prod2",producto2ToJSON);

    
} );


btnprod3.addEventListener("click", () =>{

    let img = prod3.children[1].attributes[0].nodeValue;
    let imgAlt = prod3.children[1].attributes[1].nodeValue;
    let description = prod3.children[2].innerText;
    let precio =prod3.children[3].lastChild.data;

    //Isntanciando objeto
    let producto3 = new Producto(img, imgAlt, description, precio);
   
    //cargando a storage
    
    producto3ToJSON = JSON.stringify(producto3)
    localStorage.setItem("prod3",producto3ToJSON);



    
} );

btnprod4.addEventListener("click", () =>{

    let img = prod4.children[1].attributes[0].nodeValue;
    let imgAlt = prod4.children[1].attributes[1].nodeValue;
    let description = prod4.children[2].innerText;
    let precio =prod4.children[3].lastChild.data;

    //Isntanciando objeto
    let producto4 = new Producto(img, imgAlt, description, precio);
   
    //cargando a storage
    
    producto4ToJSON = JSON.stringify(producto4)
    localStorage.setItem("prod4",producto4ToJSON);



    
} );

btnprod4.addEventListener("click", () =>{

    let img = prod4.children[1].attributes[0].nodeValue;
    let imgAlt = prod4.children[1].attributes[1].nodeValue;
    let description = prod4.children[2].innerText;
    let precio =prod4.children[3].lastChild.data;

    //Isntanciando objeto
    let producto4 = new Producto(img, imgAlt, description, precio);
   
    //cargando a storage
    
    producto4ToJSON = JSON.stringify(producto4)
    localStorage.setItem("prod4",producto4ToJSON);
    
} );

btnprod5.addEventListener("click", () =>{

    let img = prod5.children[1].attributes[0].nodeValue;
    let imgAlt = prod5.children[1].attributes[1].nodeValue;
    let description = prod5.children[2].innerText;
    let precio =prod5.children[3].lastChild.data;

    //Isntanciando objeto
    let producto5 = new Producto(img, imgAlt, description, precio);
   
    //cargando a storage
    
    producto5ToJSON = JSON.stringify(producto5)
    localStorage.setItem("prod5",producto5ToJSON);
    
} );

btnprod6.addEventListener("click", () =>{

    let img = prod6.children[1].attributes[0].nodeValue;
    let imgAlt = prod6.children[1].attributes[1].nodeValue;
    let description = prod6.children[2].innerText;
    let precio =prod6.children[3].lastChild.data;

    //Isntanciando objeto
    let producto6 = new Producto(img, imgAlt, description, precio);
   
    //cargando a storage
    
    producto6ToJSON = JSON.stringify(producto6);
    localStorage.setItem("prod6",producto6ToJSON);

    
} );

class Producto{
    constructor(img, imgAlt, description, precio){

        this.img = img,
        this.imgAlt = imgAlt,
        this.description = description,
        this.precio = precio;

    }


    getPrecio(){

            return parseFloat(this.precio);
    }

}
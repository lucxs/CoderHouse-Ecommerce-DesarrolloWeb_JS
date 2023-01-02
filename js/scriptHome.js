//Evento disparador del btn producto 1, 2 y 3 - HOME
let btnprod1 = document.getElementById("btnProd1");
let btnprod2 = document.getElementById("btnProd2");
let btnprod3 = document.getElementById("btnProd3");

//nodo del prod1 -2 - 3
let prod1 = document.getElementById("prod1");
let prod2 = document.getElementById("prod2");
let prod3 = document.getElementById("prod3");

//Evento para botón producto 1 2 y 3 - HOME

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


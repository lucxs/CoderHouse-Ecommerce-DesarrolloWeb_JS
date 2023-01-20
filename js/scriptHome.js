//Evento disparador del btn producto 1, 2 y 3 - HOME
let btnprod1 = document.getElementById("btnProd1");
let btnprod2 = document.getElementById("btnProd2");
let btnprod3 = document.getElementById("btnProd3");

//nodo del prod1 -2 - 3
let prod1 = document.getElementById("prod1");
let prod2 = document.getElementById("prod2");
let prod3 = document.getElementById("prod3");



const pedirPrecios = async ()=>{
    const resp = await
    fetch('./js/data.json')
    const productos = await resp.json()
    let i =0;
    const precios = document.querySelectorAll('.productos__precio');
    precios.forEach(precio => {
        precio.innerHTML= `<span>$</span>${productos[i].price} `
        i++;
    });
}

pedirPrecios();

//Evento para botón producto 1 2 y 3 - HOME

btnprod1.addEventListener("click", () =>{

    (async () => {

        const { value: cantidad } = await Swal.fire({
          background: "rgb(46, 45, 44)",
          color: "aliceblue",
          title: 'Lentes de sol Oakley Anti reflex',
          imageUrl: "./assets/img/productos/producto1.jpg",
          imageWidth: "20%",
          input: 'select',
          inputOptions: {
              1: '1',
              2: '2',
              3: '3',
              4: '4',
              5: '5'
          },
          inputPlaceholder: 'Elegir cantidad',
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value === '1' || value === '2' || value === '3' || value === '4' || value === '5' ) {
                resolve()
            } else {
                resolve('Debe seleccionar una cantidad')
             }
             
            })
            }
            })

            if (cantidad) {
            Swal.fire({
            text:`Producto añadido al carrito`,
            background: 'rgb(46, 45, 44)',
            color: "aliceblue"})
        
            let img = prod1.children[1].attributes[0].nodeValue;
            let imgAlt = prod1.children[1].attributes[1].nodeValue;
            let description = prod1.children[2].innerText;
            let precio =prod1.children[3].lastChild.data;

            //Isntanciando objeto
            let producto1 = new Producto(id=1,img, imgAlt, description, precio, cantidad);

            //cargando a storage
            producto1ToJSON = JSON.stringify(producto1)
            localStorage.setItem("prod1",producto1ToJSON);
            }
        
        })()

} );


btnprod2.addEventListener("click", () =>{

    (async () => {

        const { value: cantidad } = await Swal.fire({
          background: "rgb(46, 45, 44)",
          color: "aliceblue",
          title: 'Lentes de sol Oakley Anti reflex',
          imageUrl: "./assets/img/productos/producto2.jpg",
          imageWidth: "20%",
          input: 'select',
          inputOptions: {
              1: '1',
              2: '2',
              3: '3',
              4: '4',
              5: '5'
          },
          inputPlaceholder: 'Elegir cantidad',
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value === '1' || value === '2' || value === '3' || value === '4' || value === '5' ) {
                resolve()
            } else {
                resolve('Debe seleccionar una cantidad')
             }
            })
            }
            })

            if (cantidad) {
                Swal.fire({
                    text:`Producto añadido al carrito`,
                    background: 'rgb(46, 45, 44)',
                    color: "aliceblue"})

    let img = prod2.children[1].attributes[0].nodeValue;
    let imgAlt = prod2.children[1].attributes[1].nodeValue;
    let description = prod2.children[2].innerText;
    let precio =prod2.children[3].lastChild.data;

    //Isntanciando objeto
    let producto2 = new Producto(id=2,img, imgAlt, description, precio, cantidad);

    //cargando a storage
    
    producto2ToJSON = JSON.stringify(producto2)
    localStorage.setItem("prod2",producto2ToJSON);
}
        
})()

} );


btnprod3.addEventListener("click", () =>{

    (async () => {

        const { value: cantidad } = await Swal.fire({
          background: "rgb(46, 45, 44)",
          color: "aliceblue",
          title: 'Lentes de sol Oakley Anti reflex',
          imageUrl: "./assets/img/productos/producto3.jpg",
          imageWidth: "20%",
          input: 'select',
          inputOptions: {
              1: '1',
              2: '2',
              3: '3',
              4: '4',
              5: '5'
          },
          inputPlaceholder: 'Elegir cantidad',
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value === '1' || value === '2' || value === '3' || value === '4' || value === '5' ) {
                resolve()
            } else {
                resolve('Debe seleccionar una cantidad')
             }
            })
            }
            })

            if (cantidad) {
                Swal.fire({
                    text:`Producto añadido al carrito`,
                    background: 'rgb(46, 45, 44)',
                    color: "aliceblue"})

    let img = prod3.children[1].attributes[0].nodeValue;
    let imgAlt = prod3.children[1].attributes[1].nodeValue;
    let description = prod3.children[2].innerText;
    let precio =prod3.children[3].lastChild.data;

    //Isntanciando objeto
    let producto3 = new Producto(id=3,img, imgAlt, description, precio, cantidad);
   
    //cargando a storage
    
    producto3ToJSON = JSON.stringify(producto3)
    localStorage.setItem("prod3",producto3ToJSON);

}
        
})()

} );


//Promesas para cambiar el estado de la card cuando el producto este cargado en el storage.

function prod(prodx){
    if(localStorage.getItem(prodx) != null){

        return true;
    }else{
        return false;
    }
    
}

const ProductModifier = (prodVerification)=>{

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (prodVerification === true) {
                
                resolve("Producto agregado al carrito")
            }else{
                reject("nada de nada ")
            }
            
        }, 2000);
    })
}

    //modificando el boton PROD1 luego de tener el producto en el carrito
let prodVerification1 =prod("prod1");

ProductModifier(prodVerification1).then((response)=>{
    prod1.setAttribute("class", "productos__Altercard");
})

//modificando el boton PROD2 luego de tener el producto en el carrito
let prodVerification2 =prod("prod2");

ProductModifier(prodVerification2).then((response)=>{
    prod2.setAttribute("class", "productos__Altercard");
})


//modificando el boton PROD3 luego de tener el producto en el carrito
let prodVerification3 =prod("prod3");

ProductModifier(prodVerification3).then((response)=>{
    prod3.setAttribute("class", "productos__Altercard");
})



class Producto{
    constructor(id, img, imgAlt, description, precio, cantidad){
        this.id = id,
        this.img = img,
        this.imgAlt = imgAlt,
        this.description = description,
        this.precio = precio,
        this.cantidad = cantidad
    }


    getPrecio(){

            return parseFloat(this.precio);
    }

}


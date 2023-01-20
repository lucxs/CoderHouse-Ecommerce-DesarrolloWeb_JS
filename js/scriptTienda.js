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


//Usando Fetch para traer precio de productos del data.json - Y agregarlos dinamicamente a las cards del DOM.

 fetch('../js/data.json')
.then( (response) => response.json())
.then((productos) => {
  const precios = document.querySelectorAll("#precio");
  let i=0
  precios.forEach(precio => {
    precio.innerHTML = `<span>$</span>${productos[i].price}`
    i++
  });

  });


//Evento para botones de productos

btnprod1.addEventListener("click", () =>{

    (async () => {

        const { value: cantidad } = await Swal.fire({
          background: "rgb(46, 45, 44)",
          color: "aliceblue",
          title: 'Lentes de sol Oakley Anti reflex',
          imageUrl: "../assets/img/productos/producto1.jpg",
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
    let producto1 = new Producto(id =1,img, imgAlt, description, precio, cantidad);

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
          imageUrl: "../assets/img/productos/producto2.jpg",
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
    let producto2 = new Producto(id =2,img, imgAlt, description, precio, cantidad);

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
          imageUrl: "../assets/img/productos/producto3.jpg",
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
    let producto3 = new Producto(id =3,img, imgAlt, description, precio, cantidad);
   
    //cargando a storage
    
    producto3ToJSON = JSON.stringify(producto3)
    localStorage.setItem("prod3",producto3ToJSON);


}
        
})()

} );

btnprod4.addEventListener("click", () =>{

    (async () => {

        const { value: cantidad } = await Swal.fire({
          background: "rgb(46, 45, 44)",
          color: "aliceblue",
          title: 'Lentes de sol Oakley Anti reflex',
          imageUrl: "../assets/img/productos/producto4.jpg",
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

    let img = prod4.children[1].attributes[0].nodeValue;
    let imgAlt = prod4.children[1].attributes[1].nodeValue;
    let description = prod4.children[2].innerText;
    let precio =prod4.children[3].lastChild.data;

    //Isntanciando objeto
    let producto4 = new Producto(id =4, img, imgAlt, description, precio, cantidad);
   
    //cargando a storage
    
    producto4ToJSON = JSON.stringify(producto4)
    localStorage.setItem("prod4",producto4ToJSON);


}
        
})()

} );

btnprod5.addEventListener("click", () =>{

    (async () => {

        const { value: cantidad } = await Swal.fire({
          background: "rgb(46, 45, 44)",
          color: "aliceblue",
          title: 'Lentes de sol Oakley Anti reflex',
          imageUrl: "../assets/img/productos/producto5.jpg",
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

    let img = prod5.children[1].attributes[0].nodeValue;
    let imgAlt = prod5.children[1].attributes[1].nodeValue;
    let description = prod5.children[2].innerText;
    let precio =prod5.children[3].lastChild.data;

    //Isntanciando objeto
    let producto5 = new Producto(id = 5,img, imgAlt, description, precio, cantidad);
   
    //cargando a storage
    
    producto5ToJSON = JSON.stringify(producto5)
    localStorage.setItem("prod5",producto5ToJSON);
    
}
        
})()

} );

btnprod6.addEventListener("click", () =>{

    (async () => {

        const { value: cantidad } = await Swal.fire({
          background: "rgb(46, 45, 44)",
          color: "aliceblue",
          title: 'Lentes de sol Oakley Anti reflex',
          imageUrl: "../assets/img/productos/producto6.jpg",
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

    let img = prod6.children[1].attributes[0].nodeValue;
    let imgAlt = prod6.children[1].attributes[1].nodeValue;
    let description = prod6.children[2].innerText;
    let precio =prod6.children[3].lastChild.data;

    //Isntanciando objeto
    let producto6 = new Producto(id = 6,img, imgAlt, description, precio, cantidad);
   
    //cargando a storage
    
    producto6ToJSON = JSON.stringify(producto6);
    localStorage.setItem("prod6",producto6ToJSON);

    
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


//modificando el boton PROD4 luego de tener el producto en el carrito
let prodVerification4 =prod("prod4");

ProductModifier(prodVerification4).then((response)=>{
  prod4.setAttribute("class", "productos__Altercard");
})

//modificando el boton PROD5 luego de tener el producto en el carrito
let prodVerification5 =prod("prod5");

ProductModifier(prodVerification5).then((response)=>{
  prod5.setAttribute("class", "productos__Altercard");
})

//modificando el boton PROD6 luego de tener el producto en el carrito
let prodVerification6 =prod("prod6");

ProductModifier(prodVerification6).then((response)=>{
  prod6.setAttribute("class", "productos__Altercard");
})


class Producto{
    constructor(id, img, imgAlt, description, precio, cantidad){
        this.id = id,
        this.img = img,
        this.imgAlt = imgAlt,
        this.description = description,
        this.precio = precio;
        this.cantidad = cantidad
    }


    getPrecio(){

            return parseFloat(this.precio);
    }

}
//Trayendo del Storage:

 let prod1Recuperado = localStorage.getItem("prod1");
 let prod2Recuperado = localStorage.getItem("prod2");
 let prod3Recuperado = localStorage.getItem("prod3");
 let prod4Recuperado = localStorage.getItem("prod4");
 let prod5Recuperado = localStorage.getItem("prod5");
 let prod6Recuperado = localStorage.getItem("prod6");

 let precios = [];

 if(prod1Recuperado != null){

    let prod1 = JSON.parse(prod1Recuperado);
        addingNode(prod1);
        let precioTotal = prod1.precio * parseInt(prod1.cantidad);
            precios.push(parseInt(precioTotal));
      
 }

 if (prod2Recuperado != null) {
      let prod2 = JSON.parse(prod2Recuperado);
      addingNode(prod2);
      let precioTotal = prod2.precio * parseInt(prod2.cantidad);
            precios.push(parseInt(precioTotal));
 }

 if (prod3Recuperado != null) {
      let prod3 = JSON.parse(prod3Recuperado);
      addingNode(prod3);
      let precioTotal = prod3.precio * parseInt(prod3.cantidad);
            precios.push(parseInt(precioTotal));
 }

 if (prod4Recuperado != null) {
      let prod4 = JSON.parse(prod4Recuperado);
      addingNode(prod4);
      let precioTotal = prod4.precio * parseInt(prod4.cantidad);
            precios.push(parseInt(precioTotal));
 }

 if (prod5Recuperado != null) {
      let prod5 = JSON.parse(prod5Recuperado);
      addingNode(prod5);
      let precioTotal = prod5.precio * parseInt(prod5.cantidad);
            precios.push(parseInt(precioTotal));
 }

 if (prod6Recuperado != null) {
      let prod6 = JSON.parse(prod6Recuperado);
      addingNode(prod6);
      let precioTotal = prod6.precio * parseInt(prod6.cantidad);
            precios.push(parseInt(precioTotal));
 }


 function addingNode(prodx){
    let elemento = document.createElement("div");

 elemento.setAttribute("class","carrito__contenedor__prod__card1");
 
 elemento.innerHTML = `
                     <img src=${prodx.img} alt=${prodx.imgAlt} class="carrito__contenedor__prod__card1Img">
                     <p class="productos__descripcion">
                         ${prodx.description}
                     </p>
                     <p class="productos__precio">
                     <span>$</span>${prodx.precio}
                     </p>
                     <p class="productos__precio">
                     ${prodx.cantidad}
                     </p>
                     <button class="productos__buttonRemove" id="btnRemove${parseInt(prodx.id)}">Remover</button>
 `;

 
 document.getElementById("cardProd").append(elemento);

}

//Promise para darle funcion al boton Remove luego de ser agregado dinamicamente
let btnRemove1 = document.getElementById("btnRemove1");
let btnRemove2 = document.getElementById("btnRemove2");
let btnRemove3 = document.getElementById("btnRemove3");
let btnRemove4 = document.getElementById("btnRemove4");
let btnRemove5 = document.getElementById("btnRemove5");
let btnRemove6 = document.getElementById("btnRemove6");

const btnRemoveP = (btnRemovex)=>{
     return new Promise((resolve, reject)=>{
           if (btnRemovex != null) {
                 resolve(btnRemovex)
           }else{
                 reject(btnRemovex)
           }
     })
}

//Remove para todos los prod

btnRemoveP(btnRemove1).then((response)=>{
      console.log(response);
      response.addEventListener("click", ()=>{

            Swal.fire({
                  title: 'Esta Seguro que desea eliminar este producto?',
                  icon: 'warning',
                  showCancelButton: true,
                  background: "rgb(46, 45, 44)",
                  color: "aliceblue",
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, Eliminar!',
                  cancelButtonText: 'Cancelar'
                }).then((result) => {
                  if (result.isConfirmed) {
                        localStorage.removeItem("prod1")
                        location.reload()
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })
                  

      })
})
.catch((reject)=>{
      console.log({1: reject});
})

btnRemoveP(btnRemove2).then((response)=>{
      console.log(response);
      response.addEventListener("click", ()=>{
            Swal.fire({
                  title: 'Esta Seguro que desea eliminar este producto?',
                  icon: 'warning',
                  showCancelButton: true,
                  background: "rgb(46, 45, 44)",
                  color: "aliceblue",
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, Eliminar!',
                  cancelButtonText: 'Cancelar'
                }).then((result) => {
                  if (result.isConfirmed) {
                        localStorage.removeItem("prod2")
                        location.reload()
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })
            

})
})
.catch((reject)=>{
      console.log({2: reject});
})

btnRemoveP(btnRemove3).then((response)=>{
      console.log(response);
      response.addEventListener("click", ()=>{
            Swal.fire({
                  title: 'Esta Seguro que desea eliminar este producto?',
                  icon: 'warning',
                  showCancelButton: true,
                  background: "rgb(46, 45, 44)",
                  color: "aliceblue",
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, Eliminar!',
                  cancelButtonText: 'Cancelar'
                }).then((result) => {
                  if (result.isConfirmed) {
                        localStorage.removeItem("prod3")
                        location.reload()
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })

})
})
.catch((reject)=>{
      console.log({3: reject});
})

btnRemoveP(btnRemove4).then((response)=>{
      console.log(response);
      response.addEventListener("click", ()=>{
            Swal.fire({
                  title: 'Esta Seguro que desea eliminar este producto?',
                  icon: 'warning',
                  showCancelButton: true,
                  background: "rgb(46, 45, 44)",
                  color: "aliceblue",
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, Eliminar!',
                  cancelButtonText: 'Cancelar'
                }).then((result) => {
                  if (result.isConfirmed) {
                        localStorage.removeItem("prod4")
                        location.reload()
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })
            

})
})
.catch((reject)=>{
      console.log({4: reject});
})

btnRemoveP(btnRemove5).then((response)=>{
      console.log(response);
      response.addEventListener("click", ()=>{
            Swal.fire({
                  title: 'Esta Seguro que desea eliminar este producto?',
                  icon: 'warning',
                  showCancelButton: true,
                  background: "rgb(46, 45, 44)",
                  color: "aliceblue",
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, Eliminar!',
                  cancelButtonText: 'Cancelar'
                }).then((result) => {
                  if (result.isConfirmed) {
                        localStorage.removeItem("prod5")
                        location.reload()
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })
            

})
})
.catch((reject)=>{
      console.log({5: reject});
})

btnRemoveP(btnRemove6).then((response)=>{
      console.log(response);
      response.addEventListener("click", ()=>{
            Swal.fire({
                  title: 'Esta Seguro que desea eliminar este producto?',
                  icon: 'warning',
                  showCancelButton: true,
                  background: "rgb(46, 45, 44)",
                  color: "aliceblue",
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, Eliminar!',
                  cancelButtonText: 'Cancelar'
                }).then((result) => {
                  if (result.isConfirmed) {
                        localStorage.removeItem("prod6")
                        location.reload()
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })
            

})
})
.catch((reject)=>{
      console.log({6: reject});
})


 Subtotal();
 function Subtotal(){
      const TOTAL = precios.reduce(
            (acumulador, elemento) => acumulador + elemento,0);
      
      let element = document.createElement("div");
      element.setAttribute("class", "carrito__subtotal");
      element.innerHTML =` <p class="carrito__subtotal__p1">
                                 subtotal: 
                           </p>
                            <p class="carrito__subtotal__precio1">
                            ${TOTAL}$
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
  let btnFinalizar = document.getElementById("btnFnCm");
btnFinalizar.addEventListener("click", ()=>{
      Swal.fire({
            background: "rgb(46, 45, 44)",
            color: "aliceblue",
            position: 'center',
            icon: 'success',
            title: 'Gracias por realizar tu compra!',
            showConfirmButton: false,
            timer: 3000
          })
      
          localStorage.clear()
          
          setTimeout(() => {
            location.reload()
          }, 3000);
          
      })
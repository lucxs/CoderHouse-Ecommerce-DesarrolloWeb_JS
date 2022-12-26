//Evento disparador del btn producto 1
btnprod1 = document.getElementById("prod1");

//nodo del prod1
prod1 = document.getElementById("prod1");


addCarrito = document.getElementById("carrito");

btnprod1.addEventListener("click", () =>{

    let h3 = prod1.children[0].outerText;
    let img = prod1.children[1].attributes[1].nodeValue;
    let description = prod1.children[2].innerText;
    let precio =prod1.children[3].innerText;

    console.log(prod1);
    console.log(h3," - ", img," - ", description," - ", precio);

    let elemento = document.createElement("div");
    elemento.innerHTML(`
    <img src="../assets/img/productos/producto2.jpg" alt="Imagen lentes de sol" class="carrito__contenedor__prod__card1Img">
                        <p class="productos__descripcion">
                            Lentes de sol Tous polarizados111111
                        </p>
                        <p class="productos__precio">
                            $10.000
                        </p>
    `);

    addCarrito.append(elemento);


} );
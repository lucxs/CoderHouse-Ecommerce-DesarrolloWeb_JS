//Evento disparador del btn producto 1, 2 y 3 - index.html
let btnprod1 = document.getElementById("btnProd1");
let btnprod2 = document.getElementById("btnProd2");
let btnprod3 = document.getElementById("btnProd3");

//nodo del prod1 -2 - 3
let prod1 = document.getElementById("prod1");
let prod2 = document.getElementById("prod2");
let prod3 = document.getElementById("prod3")

//Almacenando en storage
localStorage.clear();

//Evento disparador del btn producto 1, 2 y 3 - index.html


let Btn1JsonFormat = JSON.stringify(btnprod1
    );

localStorage.setItem("btn1",Btn1JsonFormat);
// localStorage.setItem("btn2",btnprod2  );
// localStorage.setItem("btn3",btnprod3  );


let prod1JsonFormat = JSON.stringify(document.getElementById("prod1"))
//nodo del prod1 -2 - 3
localStorage.setItem("prod1",prod1JsonFormat );
// localStorage.setItem("prod2",prod2 );
// localStorage.setItem("prod3",prod3 );
 
 


let message = localStorage.getItem("btn1");

console.log({message});


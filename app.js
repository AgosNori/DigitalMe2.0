const loaderElement = document.querySelector(".contenedorLoader");
const header = document.querySelector('.header');
let acc = document.getElementsByClassName("accordion");
const btnMenu = document.querySelector(".menuResp");
const navHeader = document.querySelector(".navBarHeader");
const iconoheader = document.querySelector(".fa-bars");

let contenidoDrop =document.querySelector(".contenidoDrop");
let btnDrop=document.querySelector(".btnDesDrop");


const linkImg = document.querySelector("#contenedorRoadmap");
const lupa= document.querySelector(".fa-shake")
const img=document.querySelector(".imgRoadmap");
linkImg.onmouseover= () =>{
    lupa.classList.remove("ocultar");
    lupa.classList.add("centrar")
   
}
linkImg.onmouseout = () =>{
    lupa.classList.add("ocultar");
    lupa.classList.remove("centrar")
 
}

// Evento de load para ocultar el loader
window.addEventListener('load', function() {
    if (loaderElement) {
        loaderElement.classList.add("loader-hidden");
        console.log("Loader ocultado");
    } else {
        console.error("No se encontró el elemento del loader");
    }
});


// Función para mostrar/ocultar el menú
function mostrarMenu() {
    navHeader.classList.toggle("mostrarNav");
    iconoheader.classList.toggle("fa-bars");
    iconoheader.classList.toggle("fa-x");
}

// función para desplegar el drop
function desplegarDrop(){
    contenidoDrop.classList.toggle("contenidoActivo");

    if (btnDrop.textContent === "Ver menos"){
        btnDrop.textContent = "Mas info";
    }
    else{
        btnDrop.textContent = "Ver menos";
    }
}
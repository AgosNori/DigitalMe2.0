let contenidoDrop =document.querySelector(".contenidoDrop");
const btnDrop=document.querySelector(".btnDesDrop");
const loaderElement = document.querySelector(".contenedorLoader");
const header = document.querySelector('.header');
const btnMenu = document.querySelector(".menuResp");
const navHeader = document.querySelector(".navBarHeader");
const iconoheader = document.querySelector(".fa-bars");
const btnCerrMasInfo = document.querySelector(".cerrarMasInfo");

// Variable para controlar la posición de scroll
let lastScrollTop = 0;

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navHeader = document.querySelector(".navBarHeader");

    menuToggle.addEventListener("change", function () {
        navHeader.classList.toggle("mostrarNav");
    });
});


// Evento de scroll para mostrar/ocultar el header
window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        header.classList.add("hide"); // Scroll hacia abajo
    } else {
        header.classList.remove("hide"); // Scroll hacia arriba
    }
    lastScrollTop = scrollTop; // Actualizamos lastScrollTop
});

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
btnCerrMasInfo.onclick = () =>{
    desplegarDrop();
}
btnDrop.onclick = () =>{
    desplegarDrop();
}
function desplegarDrop(){
    contenidoDrop.classList.toggle("contenidoActivo");
    btnCerrMasInfo.classList.toggle("activado");
    if (btnDrop.textContent === "Mas info"){
        btnDrop.textContent = "Ver menos";
    }
    else{
        btnDrop.textContent = "Mas info";
    }
}
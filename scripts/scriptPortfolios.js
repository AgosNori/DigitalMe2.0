const loaderElement = document.querySelector(".contenedorLoader");
const header = document.querySelector('.header');
const btnMenu = document.querySelector(".menuResp");
const navHeader = document.querySelector(".navBarHeader");
const iconoheader = document.querySelector(".fa-bars");


// Variable para controlar la posición de scroll
let lastScrollTop = 0;

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
    
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
    
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, get, set, onValue } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAhypRjmD3FT8GtJKCRuS7nDuverdQFiSc",
    authDomain: "likesportfolios.firebaseapp.com",
    projectId: "likesportfolios",
    storageBucket: "likesportfolios.firebasestorage.app",
    messagingSenderId: "104267241637",
    appId: "1:104267241637:web:bb1d83b909c3001baed54c",
    measurementId: "G-1RN8TK9EEH",
    databaseURL: "https://likesportfolios-default-rtdb.firebaseio.com/"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Función para manejar los likes
document.querySelectorAll(".proyecto").forEach((card) => {
    const projectId = card.getAttribute("data-id");
    const likeCount = card.querySelector(".like-count");
    const likeBtn = card.querySelector(".like-btn");

    const likesRef = ref(database, `likes/${projectId}`);

    // Escuchar los cambios en los likes en Firebase
    onValue(likesRef, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
            likeCount.textContent = data;
        }
    });

    // Agregar evento de clic a cada botón de "like"
    likeBtn.addEventListener("click", () => {
        get(likesRef).then((snapshot) => {
            let currentLikes = snapshot.val() || 0;
            set(likesRef, currentLikes + 1);
        });
    });
});

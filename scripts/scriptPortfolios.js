const contCarta=document.querySelector(".containerCartas");
const trb1 = document.querySelector("#trabajo1");
const trb2 = document.querySelector("#trabajo2");
const trb3 = document.querySelector("#trabajo3");

const contTrb1 = document.querySelector("#contTrabajo1");
const contTrb2 = document.querySelector("#contTrabajo2");
const contTrb3 = document.querySelector("#contTrabajo3");



contCarta.onmouseover = (e)=>{
    if(e.target.id === trb1.id){
        contTrb1.classList.toggle("mostrarContenido");
        contTrb2.classList.remove("mostrarContenido");
        contTrb3.classList.remove("mostrarContenido");
    }
    if(e.target.id === trb2.id){
        contTrb2.classList.toggle("mostrarContenido");
        contTrb1.classList.remove("mostrarContenido");
        contTrb3.classList.remove("mostrarContenido");
    }
    if(e.target.id === trb3.id){
        contTrb3.classList.toggle("mostrarContenido");
        contTrb2.classList.remove("mostrarContenido");
        contTrb1.classList.remove("mostrarContenido");
    }
}

console.log("JavaScript está jalando :D");

const hoteles = document.getElementById("hoteles");
const salones = document.getElementById("salones");
const catering = document.getElementById("catering");
const carril = document.querySelector(".carril_catalogo");
const region = document.getElementById("region");
const carril_principal = document.querySelector(".carril_principal");


const eventos = document.getElementById("desc_cabo");
const servicios = document.getElementById("servicios");

const btn_eventos = document.getElementById("btn_eventos");
const btn_servicios = document.getElementById("btn_servicios");

const btn_region = document.getElementById("btn_region");
const btn_hoteles = document.getElementById("btn_hoteles");
const btn_catering = document.getElementById("btn_catering");
const btn_salones = document.getElementById("btn_salones");

btn_region.addEventListener("click", function(event) {
    event.preventDefault();

    console.log("vamos a región");
});

function cambiarSeccion(seccion, posicion) {

    hoteles.classList.remove("activa");
    salones.classList.remove("activa");
    catering.classList.remove("activa");

    seccion.classList.add("activa");

    carril.style.transform = `translateX(${posicion}%)`;
}

btn_hoteles.addEventListener("click", function(event) {
    event.preventDefault();

    cambiarSeccion(hoteles, 0);
});
btn_catering.addEventListener("click", function(event) {
    event.preventDefault();

    cambiarSeccion(catering, -200);
});
btn_salones.addEventListener("click", function(event) {
    event.preventDefault();

    cambiarSeccion(salones, -100);
});

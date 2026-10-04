
const hoteles = document.getElementById("hoteles");
const salones = document.getElementById("salones");
const catering = document.getElementById("catering");


const catalogo = document.getElementById("catalogo");
const inicio = document.getElementById("inicio");

const ir_hoteles = document.getElementById("ir_hoteles");
const ir_salones = document.getElementById("ir_salones");
const ir_catering = document.getElementById("ir_catering");


const carril = document.querySelector(".carril_catalogo");
const carril_principal = document.querySelector(".carril_principal");


const btn_eventos = document.getElementById("btn_eventos");
const btn_servicios = document.getElementById("btn_servicios");
const btn_region = document.getElementById("btn_region");
const btn_hoteles = document.getElementById("btn_hoteles");
const btn_catering = document.getElementById("btn_catering");
const btn_salones = document.getElementById("btn_salones");
const btn_inicio = document.getElementById("btn_inicio");



ir_hoteles.addEventListener("click", function(event) {
    event.preventDefault();

    catalogo.scrollIntoView();
    cambiarSeccion(hoteles, 0);
});
ir_salones.addEventListener("click", function(event) {
    event.preventDefault();

    catalogo.scrollIntoView();
    cambiarSeccion(salones, -100);
});
ir_catering.addEventListener("click", function(event) {
    event.preventDefault();

    catalogo.scrollIntoView();
    cambiarSeccion(catering, -200);
});




btn_region.addEventListener("click", function(event) {
    event.preventDefault();

    cambiarPrincipal(-100);
});

btn_eventos.addEventListener("click", function(event) {
    event.preventDefault();

    cambiarPrincipal(-200);
});

btn_servicios.addEventListener("click", function(event) {
    event.preventDefault();

    cambiarPrincipal(-300);
});



const flechas_regresar = document.querySelectorAll(".flecha_regresar");

flechas_regresar.forEach(function(flecha) {

    flecha.addEventListener("click", function() {
        cambiarPrincipal(0);
    });

});


btn_inicio.addEventListener("click", function(event) {
    event.preventDefault();

    inicio.scrollIntoView();
    cambiarPrincipal(0);
});



function cambiarSeccion(seccion, posicion) {

    hoteles.classList.remove("activa");
    salones.classList.remove("activa");
    catering.classList.remove("activa");

    seccion.classList.add("activa");

    carril.style.transform = `translateX(${posicion}%)`;
}

function cambiarPrincipal(posicion) {
    carril_principal.style.transform = `translateX(${posicion}%)`;
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

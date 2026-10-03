console.log("JavaScript está jalando :D");

const hoteles = document.getElementById("hoteles");
const salones = document.getElementById("salones");
const catering = document.getElementById("catering");

const btn_hoteles = document.getElementById("btn_hoteles");
const btn_catering = document.getElementById("btn_catering");
const btn_salones = document.getElementById("btn_salones");

function cambiarSeccion(seccion) {

    hoteles.classList.remove("activa");
    salones.classList.remove("activa");
    catering.classList.remove("activa");

    seccion.classList.add("activa");
}

btn_hoteles.addEventListener("click", function(event) {
    event.preventDefault();

    cambiarSeccion(hoteles);
});
btn_catering.addEventListener("click", function(event) {
    event.preventDefault();

    cambiarSeccion(catering);
});
btn_salones.addEventListener("click", function(event) {
    event.preventDefault();

    cambiarSeccion(salones);
});

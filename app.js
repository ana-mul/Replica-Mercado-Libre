// MENU DESPLEGABLE NAV

const categorias = document.getElementById("ul-categorias");
const usuario = document.getElementById("ul-usuario");
const favoritos = document.getElementById("ul-favoritos");


const toggleMenu = (a) =>{
if (a.style.display === "block") {
    a.style.display = "none"
} else {
    a.style.display ="block";
}
};

document.getElementById("btn-categorias").addEventListener("click", () => toggleMenu(categorias));
document.getElementById("btn-usuario").addEventListener("click",() => toggleMenu(usuario))
document.getElementById("btn-fav"). addEventListener("click", () =>toggleMenu(favoritos))

//SLIDE HERO

const images = document.querySelectorAll('.img-hero'); //selecciono por clase
let index = 0;

const slide = () => {
    images.forEach((img, idx) => { //ciclo de las img 
        img.parentElement.classList.remove("active"); //accedemos al padre, removemos la clase active que definimos en css
        if (idx === index) { //condicional para verificar que idx sea igual al index
            img.parentElement.classList.add("active"); // Si es igual, se añade active al index que corresponde 
        }
    });
    index = (index + 1) % images.length;
};

document.addEventListener("DOMContentLoaded", () => {
    slide(); // Mostrar la primera imagen inmediatamente
    setInterval(slide, 3000); // Iniciar el slider
});


document.getElementById("arrow-left").addEventListener("click", slide);
document.getElementById("arrow-right").addEventListener("click", slide);
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
    index = (index + 1) % images.length; // buscamos el resto de la division entre index+1 y la cantidad de imagenes, asi  al llegar a 0 vuelve a empezar
};

document.addEventListener("DOMContentLoaded", () => {
    slide(); // Mostrar la primera imagen inmediatamente
    setInterval(slide, 3000); //para que las imagenes se muevan solas cada 3''
}); 


document.getElementById("arrow-left").addEventListener("click", slide); //click izquierdo para cambiar imagen
document.getElementById("arrow-right").addEventListener("click", slide); //click derecho para cambiar imagen

//SLIDE SECTION CARDS

// const cardsContainer = document.querySelector('.cards');
// const cardElements = document.querySelectorAll('.product-card');
// const arrowLeft = document.querySelector('.ar-left');
// const arrowRight = document.querySelector('.ar-right');






// // Selecciona los elementos
// const cardsContainer = document.querySelector('.cards');
// const arrowLeft = document.querySelector('.ar-left');
// const arrowRight = document.querySelector('.ar-right');

// // Desplazamiento en píxeles para cada clic (puede ser el ancho de una tarjeta o un poco más)
// const scrollAmount = 150 * 6; // Ancho de 6 tarjetas

// // Mover hacia la derecha
// arrowRight.addEventListener('click', () => {
//   cardsContainer.scrollLeft += scrollAmount; // Desplaza a la derecha
// });

// // Mover hacia la izquierda
// arrowLeft.addEventListener('click', () => {
//   cardsContainer.scrollLeft -= scrollAmount; // Desplaza a la izquierda
// });

  
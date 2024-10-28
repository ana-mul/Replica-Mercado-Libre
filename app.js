// MENU DESPLEGABLE NAV

const categorias = document.getElementById("ul-categorias");
const usuario = document.getElementById("ul-usuario");
const favoritos = document.getElementById("ul-favoritos");

const toggleMenu = (a) => {
  if (a.style.display === "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
};

document
  .getElementById("btn-categorias")
  .addEventListener("click", () => toggleMenu(categorias));
document
  .getElementById("btn-usuario")
  .addEventListener("click", () => toggleMenu(usuario));
document
  .getElementById("btn-fav")
  .addEventListener("click", () => toggleMenu(favoritos));

//SLIDE HERO

const images = document.querySelectorAll(".img-hero"); //selecciono por clase
let index = 0;

const slide = () => {
  images.forEach((img, idx) => {
    //ciclo de las img
    img.parentElement.classList.remove("active"); //accedemos al padre, removemos la clase active que definimos en css
    if (idx === index) {
      //condicional para verificar que idx sea igual al index
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
let currentIndex = 0; // Índice actual de las tarjetas
const cards = document.querySelectorAll('.product-card'); // Selecciona todas las tarjetas
const totalCards = cards.length; // Total de tarjetas
const cardsToShowInitially = 6; // Número de tarjetas a mostrar inicialmente
const cardsToShowNext = 6; // Número de tarjetas a mostrar al hacer clic
const right = document.querySelector(".ar-right");
const left = document.querySelector(".ar-left");


  const updateCards = () => {
      // Muestra las tarjetas actuales
      cards.forEach((card, index) => {
          if (index >= currentIndex && index < currentIndex + cardsToShowInitially) {
              card.style.display = 'block'; // Muestra la tarjeta
          } else {
              card.style.display = 'none'; // Oculta la tarjeta
          }
      });

      //Para flechas
      if (currentIndex === 0) {
        left.style.display = 'none'; // Oculta flecha izquierda
        right.style.display = 'flex'; // Muestra flecha derecha
    } else {
        left.style.display = 'flex'; // Muestra flecha izquierda
        right.style.display = 'flex'; // Muestra la flecha derecha
    }

    // Lógica para la flecha derecha en el límite
    if (currentIndex + cardsToShowInitially >= totalCards) {
        right.style.display = 'none'; // Oculta flecha derecha si estamos al final
    }
  }
//buttons
  const moveFoward = () => {
    currentIndex += cardsToShowNext; 
    if (currentIndex + cardsToShowInitially > totalCards) {
        currentIndex = totalCards - cardsToShowInitially; // Ajusta para mostrar las últimas 6 tarjetas
    }
    updateCards();
};
  

const moveBack = () => {
  currentIndex -= cardsToShowNext;
  if (currentIndex < 0){
    currentIndex = 0;
  }
  updateCards();
};

updateCards();
  right.addEventListener('click', moveFoward);
  left.addEventListener('click', moveBack);



 
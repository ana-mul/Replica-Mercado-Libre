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
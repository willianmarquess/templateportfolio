const botaoHamburguer = document.getElementById("menuhamburguer");
const nav = document.getElementById("navegacao");

botaoHamburguer.addEventListener('click', () => {
    nav.classList.toggle('triggerMenu');
})
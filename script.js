// Abrir o menu Responsivel
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// Abrir a Loopa para Pesquisar
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

// Abrir o menu do carrinho
let cartItem = document.querySelector('.cardCarrinho-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// Se rolar a pagina, removar o menu aberto do carrinho/Loopa
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

/*---- SCROLL REVEAL ANIMATION ---- */
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
})

// Animation nos Elementos
sr.reveal(".lexwork", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".sobre",{ distance: "20px", delay: 50, interval: 100 });
sr.reveal(".menu", { delay: 350});
sr.reveal("#products", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".review",{ distance: "20px", delay: 50, interval: 100 });
sr.reveal(".contact", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".blogs",{ distance: "20px", delay: 50, interval: 100 });
sr.reveal(".footer", {});
// sr.reveal(".home", {});

// Function Efeito na img da Home . Quando rola o scroll do mouser
// const bg = document.querySelector('.home')
// window.addEventListener('scroll', function(){
//     bg.style.backgroundSize = 100 - +window.pageYOffset/12+'%';
//     bg.style.opacity = 1 - +window.pageYOffset/12+'';
// })










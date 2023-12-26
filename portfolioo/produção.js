const menulaterall = document.querySelector('.menu-lateral')
const botaoFechar = document.querySelector('.bi-x-lg')
const botaodeabrirMenu = document.querySelector('.bi-list')

function fecharmenu(){
    menulaterall.style.display = "none"
}

function abrirmenu(){
    menulaterall.style.display = "block"
}


botaodeabrirMenu.addEventListener('click', abrirmenu)
botaoFechar.addEventListener('click', fecharmenu)
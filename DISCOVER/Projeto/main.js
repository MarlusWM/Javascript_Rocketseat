var troca = document.querySelector('#switch')
troca.addEventListener('click', clicou)

function clicou() {
    var corpo = document.querySelector('body')
    corpo.classList.toggle('light')
}
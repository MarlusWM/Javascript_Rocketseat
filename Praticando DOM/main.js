const acionar = document.querySelector('#openModal')

const teclar = document.querySelector('#mostrar')

acionar.onclick = function() {
    const criarP = document.createElement('p')
    criarP.innerText = 'Aperte ESC'
    const adicionarP = document.querySelector('#mostrar')
    adicionarP.append(criarP)

    teclar.classList.toggle('invisivel')
}

document.addEventListener('keydown', function(event) {
    const escKey = event.key === 'Escape'

    if(escKey){
        teclar.classList.toggle('invisivel')
        
    }
})
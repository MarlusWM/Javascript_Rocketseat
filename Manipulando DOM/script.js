const mostrar = document.querySelector('h1#blogTitle')
console.log(mostrar)

//apresenta e += concatena com o que já está no H1
mostrar.textContent += ' olá devs'

//e se quiser mudar o texto?
mostrar.innerText = 'Olá dev!'

//para adicionar um conteúdo (nó?) no html?
mostrar.innerHTML = 'Olá Marlus Dev <h1> <small>Vc vai conseguir aprender, sim!</small></h1>'

//input
const caixa = document.querySelector('input#txt')
caixa.value = 'Mostrar pré texto' //posso tambem colocar no html <input type="text" name="txt id="txt value="Mostrar pré texto"

//atributos
const cabecalho = document.querySelector('header')//selecionei o nó header
cabecalho.setAttribute('id', 'cabec')//setei o atributo ID com nome CABEC
//cabecalho.removeAttribute('id')
console.log(cabecalho.getAttribute('id'))//para buscar o atributo e mostrar no console

mostrar.classList.add('active')
mostrar.classList.toggle('active') //toggle funciona como um interruptor, se existe a classe ele remove a classe da variavel, se não existe ele inclui a classe na variavel
//mostrar.classList.remove('active') serve para remover uma classList

console.log(mostrar.parentNode) //para navegar pelo nó pai
const mostrarII = document.querySelector('article')
console.log(mostrarII.childNodes) //para mostrar os nós filhos, se trocar por .children ele elimina os espaços vazios mas não consigo chamar em forEach

const corpo = document.querySelector('body script')//assim ele vai pegar o script que está especificamente dentro do body, se não indicar que é no body, ele vai pegar o primeiro.
console.log(corpo.previousSibling) //considera os espaços e posso colocar em forEach
console.log(corpo.previousElementSibling)//não considera os espaços vazios e pode ser chamado em forEach

//criando e adicionando elemento
//criando
const criar = document.createElement('p')
criar.innerText = 'criando e adicionando elementos'
//adicionando elemento
const artigo = document.querySelector('article')//chama o local que vai add
//artigo.append(criar)//append para criar o elemento depois do item chamdo
artigo.prepend(criar)//prepend adiciona antes do elemento chamado
artigo.insertBefore(criar, caixa)//criando o elemento antes de...(variavel criada para ser incluída, elemento que deseja incluir acima)

const titulo = document.querySelector('h1#blogTitle')
artigo.insertBefore(criar, titulo.nextElementSibling)//para incluir "after" depois de um elemento


import Modal from './modal.js'
//aqui estamos importando a modal para a main
const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')
//pegar todos os botoes com a class check
const checkButtons = document.querySelectorAll(".actions a.check") // aqui se deixa bem especifico -> dentro da classe action
                                                                 // e dentro da classe filho a.check -> a de navagacao 

checkButtons.forEach(button => { // foreach ele percorre por todos os botoes 
    // adicionar a escuta, event listner
    // o button abaixo pode ser qualquer nome, exemplo guilherme 
    button.addEventListener("click", handleClick)
}) //aqui o eventi criado "check" recebe o padrao de false
    // o "CLICK" SIGNIFICA O EVENTO QUE TU QUER FAZER COM O BOTAO, PODE SER UM HOVER POR EXEMPLO 
       //serve para qnd clicar no "marcar como lida" aparecer essa frase na modal 
           //aqui vai abrir a modal
    
    // quando o botao deletye for clicado ele abre a modal 
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListner("click", (event) => handleClick(event, false))
    // srve para qnd clicar no excluir, aparecer essa frase do modal
    })
    
    function handleClick(event, check = true){// ta apssando o evento criado check , sendo o padrao como true
        event.preventDefault()
        const text = check ? "Marcar como lida" : "Excluir"
        const slug = check ? "check" : "delete"
        const roomID = document.querySelector("#room-id").dataset.id
        const questionID = event.target.dataset.id

        const form = document.querySelector(".modal form")
        form.setAttribute("action", `/room/${roomID}/${questionID}/:${slug}`) // aqui estamos setando um atributo na modal


        modalTitle.innerHTML =  `${text} esta pergunta` // o dolar com parenteses para inserior a variavel, e apos qualquee conteudo sai como HTML
        // aqui temos um ternario "?" significa como true ":" significa se nao 
        modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?` // funcao toLowerCsase serve para deixar as letras do Marcar e Excluir minusculas
        modalButton.innerHTML= `Sim, ${text.toLocaleLowerCase()}`
        check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

        //abrir modal
        modal.open()
    }




// abrir o modal

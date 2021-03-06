import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

//pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener('click', handleClick) 
})
//pegar quando o marcar como lido for clicado

//abrir modal


const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    modalTitle.innerHTML = check ? 'Marcar como lido' : 'Excluir essa pergunta'
    modal.open()
}
/* const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-cancel-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(div => {
    div.addEventListener('click', () => {
        const modal = document.querySelector(div.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(div => {
    div.addEventListener('click', () => {
        const modal = div.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

*/



document.getElementById('openModal').onclick = function(){
    document.getElementById('modal').style.display = "block"
}

document.getElementById('openModal2').onclick = function(){
    document.getElementById('modal').style.display = "block"
}

document.getElementById('openModal3').onclick = function(){
    document.getElementById('modal').style.display = "block"
}

document.getElementById('modal-cancel').onclick = function(){
    document.getElementById('modal').style.display = "none"
}

document.getElementById('modal-overlay').onclick = function(){
    document.getElementById('modal').style.display = "none"
}
const closeModal = document.querySelector('.close-modal')
const showModals = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

//handling  clicks
const closeModals = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
for (let i=0; i < showModals.length; i ++){
    showModals[i].addEventListener('click', () => {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
        
    })
}
closeModal.addEventListener('click', closeModals)
overlay.addEventListener('click', closeModals)

// handling key press
document.addEventListener('keyup' , (e) => {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModals()
    }
})
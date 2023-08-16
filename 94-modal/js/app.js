const openModal = document.querySelector('#open-modal')
const closeModal = document.querySelector('#close-modal ')
const modalOverlay = document.querySelector('#modal-overlay')

openModal.addEventListener('click', () => {
    modalOverlay.classList.add('active')
})

closeModal.addEventListener('click', () => {
    modalOverlay.classList.remove('active')
})

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active')
    }
})

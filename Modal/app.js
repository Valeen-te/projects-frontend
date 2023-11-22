const btnModal = document.querySelector('.btn-modal');
const btnClose = document.querySelector('.btn-close');
const modal = document.querySelector('.modal-overlay');

btnModal.addEventListener("click", ()=>{
    modal.classList.toggle("modal-visible");
})

btnClose.addEventListener("click", ()=>{
    modal.classList.toggle("modal-visible");
})
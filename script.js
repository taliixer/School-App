const modal = document.querySelector(".modal__menu")
const closeModal= document.querySelector(".modal__close")
const buttonMenu = document.getElementById("menu")

buttonMenu.addEventListener("click",function(){
    modal.style.top = '0'
})

closeModal.addEventListener("click",function(){
    modal.style.top = '-100vh'
})

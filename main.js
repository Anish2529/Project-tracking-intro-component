const menu = document.querySelector(".open")
const cancel = document.querySelector(".close")
const mobile = document.querySelector(".active-navbar")

menu.addEventListener('click',() =>{

    menu.style.display = "none"
    cancel.style.display = "block"
    mobile.style.display = "flex"
})

cancel.addEventListener('click',() =>{

    menu.style.display = "block"
    cancel.style.display = "none"
    mobile.style.display = "none"
})
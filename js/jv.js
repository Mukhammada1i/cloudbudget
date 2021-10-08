const button = document.getElementById("burger-menu-button")

const menu = document.getElementById("header-ul")

button.addEventListener("click", () => {
    menu.classList.toggle("mobile-menu")
})
const links= document.querySelectorAll(".header-link")
links.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        menu.classList.remove("mobile-menu")
    })
})
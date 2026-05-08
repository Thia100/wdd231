const navMenu = document.querySelector(".nav-menu")
const openNav = document.querySelector(".open");
openNav.addEventListener("click", () => {
    navMenu.classList.add("active")
})


const closeNav = document.querySelector(".close");
closeNav.addEventListener("click", () => {
    navMenu.classList.remove("active")
})


const navMenu = document.querySelector(".navMenu")
const openNav = document.querySelector(".open");
openNav.addEventListener("click", () => {
    navMenu.classList.add("active")
})

const closeNav = document.querySelector(".close");
closeNav.addEventListener("click", () => {
    navMenu.classList.remove("active")
})

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navMenu.classList.remove("active");
  }
});


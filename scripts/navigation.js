const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

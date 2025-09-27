const toggle = document.querySelector("#nav-toggle");
const menu = document.querySelector("#nav-menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
});


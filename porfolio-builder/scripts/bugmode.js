const navMenu = document.querySelector("#navMenu");
const navMenuToggle = document.querySelector("#navMenuToggle");

navMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navMenuToggle.classList.toggle("active");
});




const nav = document.getElementById('nav');
const header = document.querySelector('header');

// create observer
const observer = new IntersectionObserver((entries) => {
  const entry = entries[0];
  nav.classList.toggle('scrolled', !entry.isIntersecting);
}, { threshold: 0.1 });

observer.observe(header);


const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateMe');


hamburgerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

window.addEventListener('scroll', () =>{
    var header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
})
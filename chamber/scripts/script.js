const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateMe');

hamburgerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})
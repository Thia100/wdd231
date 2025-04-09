const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateMe');


hamburgerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})

const bookNow = document.querySelector('#nav-button');
bookNow.addEventListener('click', () =>{
    window.open = ('/final-project/booking.html', '_blank');
})



const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  faq.addEventListener("click", () =>{
    faq.classList.toggle("active");
  })
})
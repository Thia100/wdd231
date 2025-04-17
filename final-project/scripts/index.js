const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateMe');

hamburgerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;



window.addEventListener('scroll', () =>{
    var header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
})



const requestURL = './data/service-price.json';
async function getservicePrice() {
    try{
        const urlResponse = await fetch(requestURL);
        if (urlResponse.ok){
            const urlData = await urlResponse.json();
            displayServices(urlData);
            console.log(urlData);
        } else{
            throw new Error(await urlResponse.text());
        }
    }
    catch (error){
        console.error('fetch error', error);
    }
}
getservicePrice();

const displayServices = (urlData) => {
    const cards = document.querySelector('#popular-services');
    cards.innerHTML = '';

    const popularServices = urlData.filter(service => service.price <= 30000);
    popularServices.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-line');

        const name = document.createElement('p');
        name.classList.add('service-name');
        name.innerHTML = service.name;

        const price = document.createElement('p');
        price.classList.add('service-price');
        price.innerHTML = `₦${service.price}`;

        serviceCard.appendChild(name);
        serviceCard.appendChild(price);
        cards.appendChild(serviceCard);
        
    });
};




function formatCurrentDate() {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const dateElements = document.querySelectorAll('#currentdate');
    const formattedDate = formatCurrentDate();
    
    dateElements.forEach(element => {
      element.textContent = formattedDate;
    });
});
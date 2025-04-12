document.addEventListener('DOMContentLoaded', () => {
    const hamburgerElement = document.querySelector('#myButton');
    const navElement = document.querySelector('#animateMe');

    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open');
    });
});


import {places} from "../modules/places.js";
console.log(places);

const cards = document.querySelector('#someWhere');

function displayPlaces(places){
    places.forEach( x => {
        const thecard = document.createElement('div');

        const figure = document.createElement('figure');
        const photo = document.createElement('img');
        photo.src = `./images/${x.photo_reference}`;
        photo.alt = `${x.name}`;
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', '300');
        const figCaption = document.createElement('figcaption');
        figCaption.textContent = `${x.name}`;

        figure.appendChild(photo);
        figure.appendChild(figCaption);
    

        const title = document.createElement('h2');
        title.innerHTML = x.name;


        const theaddress = document.createElement('address');
        theaddress.innerHTML = x.address;
        

        const description = document.createElement('p');
        description.innerHTML = x.description;


        
        thecard.appendChild(photo);
        thecard.appendChild(figure)
        thecard.appendChild(title);
        thecard.appendChild(theaddress);
        thecard.appendChild(description);
        cards.appendChild(thecard);
        
    });
}
displayPlaces(places)



document.addEventListener('DOMContentLoaded', function() {
    const messageText = document.querySelector('#message-text');
    // Get current visit date
    const currentVisit = new Date();
    const lastVisit = localStorage.getItem('lastVisit');
    
    // First visit
    if (!lastVisit) {
        messageText.textContent = "Welcome! Let us know if you have any questions.";
    } 
    else {
        const lastVisitDate = new Date(parseInt(lastVisit));
        const timeDiff = currentVisit - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        
        if (daysDiff === 0) {
            messageText.textContent = "Back so soon! Awesome!";
        } 
        else {
            messageText.textContent = `You last visited ${daysDiff} day${daysDiff !== 1 ? 's' : ''} ago.`;
        }
    }
    
    // Store current visit
    localStorage.setItem('lastVisit', currentVisit.getTime().toString());
    
    // Close button functionality
    
    // Auto-hide after 5 seconds
    // setTimeout(() => {
    //     visitMessage.style.opacity = '0';
    //     setTimeout(() => {
    //         visitMessage.style.display = 'none';
    //     }, 500);
    // }, 5000);
});
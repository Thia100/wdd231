document.addEventListener('DOMContentLoaded', () => {
    const hamburgerElement = document.querySelector('#myButton');
    const navElement = document.querySelector('#animateMe');

    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open');
    });
});





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
});






const requestURL = './data/discover.json';
async function getplacesData(){
    try{
        const urlResponse = await fetch(requestURL);
        if(urlResponse.ok){
            const urlData = await urlResponse.json();
            displayPlaces(urlData);
            console.log(urlData);
        } else{
            throw new Error(await urlResponse.text());
            
        }
    } catch (error){
        console.error('fetch error:', error);
    }
}
getplacesData();


const displayPlaces = (urlData) =>{
    const cards = document.querySelector('#someWhere');
    cards.innerHTML = '';

    urlData.forEach( x => {
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
};
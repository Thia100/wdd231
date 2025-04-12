const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateMe');


hamburgerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const apiKey = 'ec1534ef72dab5cce496e92dee471474';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=7.79&lon=4.53&cnt=3&appid=${apiKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data); 
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const displayResults = (data) => {
    const cards = document.querySelector('#current-weather');
    
    cards.innerHTML = '';

    
    const card = document.createElement('section');

    const currentTemp = document.createElement('p');
    currentTemp.innerHTML = `<strong>${data.main.temp}°F</strong>`; 

    const weatherDesc = document.createElement('p');
    weatherDesc.textContent = `${data.weather[0].description}`;
    
    const tempMax = document.createElement('p');
    tempMax.textContent = `High: ${data.main.temp_max}°F`;

    const tempMin = document.createElement('p');
    tempMin.textContent = `Low: ${data.main.temp_min}°F`;

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    const sunRise = document.createElement('p');
    sunRise.textContent =  `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    const sunSet = document.createElement('p');
    sunSet.textContent =  `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    const weatherIcon = document.createElement('img');
    weatherIcon.classList.add('weather-icon');
    weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`); 
    weatherIcon.setAttribute('alt', data.weather[0].description); 

   
    card.appendChild(currentTemp);
    card.appendChild(weatherDesc);
    card.appendChild(tempMax);
    card.appendChild(tempMin);
    card.appendChild(humidity);
    card.appendChild(sunRise);
    card.appendChild(sunSet);
    card.appendChild(weatherIcon);
    cards.appendChild(card);
};
apiFetch();



const requestURL = './data/members.json';
async function getMemberData(){
    try{
        const urlResponse =  await fetch(requestURL);
        if(urlResponse.ok){
            const urlData = await urlResponse.json();
            displayMembers(urlData)
            console.log(urlData);
        } else {
            throw new Error(await urlResponse.text());
        }
    } catch (error){
        console.error('fetch error:', error);
    }

}
getMemberData();

const displayMembers = (urlData) => {
    const busCards = document.querySelector('.b-cards');
    busCards.innerHTML = '';

    for (let i = 0; i < 3 && i < urlData.length; i++) {
        const member = urlData[i];
        const bcard = document.createElement('section');

        const memberName = document.createElement('h3');
        memberName.textContent = member.name;

        const motto = document.createElement('p');
        motto.textContent = member.description;

        const email =  document.createElement('p');
        email.innerHTML = `<strong>Email:</strong> ${member.email}`;

        const phoneNumber =  document.createElement('p');
        phoneNumber.innerHTML = `<strong>Phone:</strong> ${member.phoneNumber}`;

        const businessUrl = document.createElement('a');
        businessUrl.href = member.websiteURL;
        businessUrl.target = '_blank';
        businessUrl.classList.add('member-website');
        businessUrl.innerHTML = `<strong>URL:</strong> ${member.websiteURL}`;

        const businessLogo = document.createElement('img');
        businessLogo.setAttribute('src', member.image);
        businessLogo.setAttribute('alt', `Logo of ${member.name}`);
        businessLogo.setAttribute('width', '340');
        businessLogo.setAttribute('height', '400');
        businessLogo.setAttribute('loading', 'lazy');

        const membershipLevel = document.createElement('p');
        membershipLevel.innerHTML = `<strong>Membership Level:</strong> ${member.membershipLevel}`;

        bcard.appendChild(businessLogo);
        bcard.appendChild(memberName);
        bcard.appendChild(motto);
        bcard.appendChild(email);
        bcard.appendChild(phoneNumber);
        bcard.appendChild(membershipLevel); 
        bcard.appendChild(businessUrl);
        busCards.appendChild(bcard);
    }
}




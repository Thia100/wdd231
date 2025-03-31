const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#captionDesc'); // Corrected to match the HTML

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=ec1534ef72dab5cce496e92dee471474&units=imperial';

// Making use of the async function allows my program to wait until the URL has been accessed
// Try-catch checks for any errors in the data fetched and logs it out to the console instead of the program crashing
async function apiFetch() {             
    try {
        // This sends a request to get data from the URL.
        // Await makes JavaScript pause until the response comes back.
        const response = await fetch(url);
        // Catches any error from the data
        // If it was successful, move to the next step; if not, handle the error
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}`; // Display the temperature
    weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`); // Set the weather icon
    weatherIcon.setAttribute('alt', data.weather[0].description); // Set alt text for the icon
    captionDesc.innerHTML = data.weather[0].description; // Update the caption with the weather description
}

apiFetch();
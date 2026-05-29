// const forecastWeatherContainer = document.querySelector("#forecastWeatherContainer");
// const currentWeatherSection = document.querySelector("#currentWeatherSection");

// const apiKey = "75747260aedaed443a3a702a368c065d";
// const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=7.49&lon=4.55&units=metric&appid=${apiKey}`;
// const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=7.49&lon=4.55&units=metric&appid=${apiKey}`;

// async function fetchWeather(forecastUrl) {
//   try {
//     const forecastResponse = await fetch(forecastUrl);
//     const forecastData = await forecastResponse.json();
//     displayResults(forecastData);
//     console.log(forecastData);

//     const currentWeatherResponse = await fetch(currentWeatherUrl);
//     const currentData = await currentWeatherResponse.json();

//   } catch (error) {
//     console.log(`Failed to fetch weather: ${error.message}`);
//   }
// }

// function displayForecastResults(forecastData) {
//   forecastWeatherContainer.innerHTML = "";

//   const forecastDays = [
//     forecastData?.list[0],
//     forecastData?.list[8],
//     forecastData?.list[16],
//   ];

//   forecastDays.forEach((day) => {
//     const card = document.createElement("div");
//     card.classList.add("weatherCard");

//     card.innerHTML = `
//       <h3>${new Date(day.dt_txt).toLocaleDateString("default", { weekday: "long" })}</h3>
//       <p>${day.main.temp}°C</p>
//       <p>${day.weather[0].description}</p>
//     `;
//     forecastWeatherContainer.appendChild(card);
//   });
// }
// function displayCurrentWeatherResults() {

// }
// fetchWeather(forecastData);
const forecastWeatherContainer = document.querySelector(
  "#forecastWeatherContainer",
);
const currentWeatherSection = document.querySelector("#currentWeatherSection");

const apiKey = "75747260aedaed443a3a702a368c065d";

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=7.49&lon=4.55&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=7.49&lon=4.55&units=metric&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    displayForecastResults(forecastData);

    const currentWeatherResponse = await fetch(currentWeatherUrl);
    const currentData = await currentWeatherResponse.json();
    displayCurrentWeatherResults(currentData);

  } catch (error) {
    console.log(`Failed to fetch weather: ${error.message}`);
  }
}

function displayForecastResults(forecastData) {
  forecastWeatherContainer.innerHTML = "";

  const forecastDays = [
    forecastData.list[0],
    forecastData.list[8],
    forecastData.list[16],
  ];

  forecastDays.forEach((day) => {
    const card = document.createElement("div");
    card.classList.add("forecastCard");

    card.innerHTML = `
      <h3>
        ${new Date(day.dt_txt).toLocaleDateString("default", {
          weekday: "long",
        })}
      </h3>
      <p>${day.main.temp}°C</p>
      <p>${day.weather[0].description}</p>
    `;

    forecastWeatherContainer.appendChild(card);
  });
}

function displayCurrentWeatherResults(currentData) {
  currentWeatherSection.innerHTML = `
    <div class="weatherCard">
      <h2>Current Weather</h2>
      <p>${currentData.main.temp}°C</p>
      <p>${currentData.weather[0].description}</p>
    </div>
  `;
}

fetchWeather();

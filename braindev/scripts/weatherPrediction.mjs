export function getWeather() {
  const apiKey = "ec1534ef72dab5cce496e92dee471474";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=7.58&lon=4.52&appid=";
  async function fetchUrl() {
    try {
      const response = await fetch(apiUrl + apiKey + `&units=metric`);
      if (response.ok) {
        const data = await response.json();
        displayWeather(data);
        console.log(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }

  const displayWeather = (data) => {
    const weatherDisplayContainer =
      document.querySelector("#weatherPrediction");
    weatherDisplayContainer.innerHTML = ``;

    const temperature = document.createElement("p");
    temperature.innerHTML = `Temperature: ${data.main.temp}°C`;

    const humidity = document.createElement("P");
    humidity.innerHTML = `Humidity ${data.main.humidity}%`;

    const wind = document.createElement("p");
    wind.innerHTML = `Wind speed ${data.wind.speed}m/s`;

    const weatherUpdate = document.createElement("p");

    weatherDisplayContainer.appendChild(temperature);
    weatherDisplayContainer.appendChild(wind);
    weatherDisplayContainer.appendChild(humidity);
    weatherDisplayContainer.appendChild(weatherUpdate);
    if (data.weather[0].main == "Clouds") {
      weatherUpdate.innerHTML = `☁️ Heads up dev, it's cloudy. Perfect time to COOK!`;
    } else if (data.weather[0].main == "Clear") {
      weatherUpdate.innerHTML = `☀️ Clear skies! Touch grass!`;
    } else if (data.weather[0].main == "Rain") {
      weatherUpdate.innerHTML = `🌧️ Rainy skies. Grab some hot coacoa and crack that code!`;
    } else if (data.weather[0].main == "Drizzle") {
      weatherUpdate.innerHTML = `🌦️ Just a slight drizzle...your code migh run smoother than the weather!`;
    } else if (data.weather[0].main == "Mist") {
      weatherUpdate.innerHTML = `Misty out there...don't let your code logic get foggy!`;
    } else {
      weatherUpdate.innerHTML = `Weather's doing it's thing, keep on coding!`;
    }
  };

  fetchUrl();
}

export function getWeatherData() {
  const apiKey = "ec1534ef72dab5cce496e92dee471474";
  const apiURL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=7.58&lon=4.52&appid=";

  async function fetchApi() {
    try {
      const reponse = await fetch(apiURL + apiKey + `&units=metric`);
      if (reponse.ok) {
        const data = await reponse.json();
        displayWeatherResults(data);
      } else {
        throw Error(await reponse.text());
      }
    } catch (error) {
      console.log(error);
    }
  }

  const displayWeatherResults = (data) => {
    const currentWeather = document.querySelector("#current-weather");
    const futureWeather = document.querySelector("#future-weather");

    currentWeather.innerHTML = "";
    futureWeather.innerHTML = "";

    const weatherCard = document.createElement("div");
    weatherCard.classList.add("current-weather-card");

    const currentTemp = document.createElement("p");
    const currentDescription = document.createElement("p");
    const firstEntry = data.list[0];

    currentDescription.innerHTML = `Description: ${firstEntry.weather[0].description}`;
    currentTemp.innerHTML = `Temperature: ${firstEntry.main.temp}°C`;

    weatherCard.appendChild(currentDescription);
    weatherCard.appendChild(currentTemp);

    currentWeather.appendChild(weatherCard);

    let dailyForecast = {};
    data.list.forEach((item) => {
      const [date, time] = item.dt_txt.split(" ");
      if (time === "12:00:00" && !dailyForecast[date]) {
        dailyForecast[date] = item;
      }
    });

    const dates = Object.keys(dailyForecast).slice(0, 3);
    dates.forEach((date) => {
      const forecast = dailyForecast[date];

      const futureWeather = document.querySelector("#future-weather");

      const futureWeatherCard = document.createElement("div");
      futureWeatherCard.classList.add("future-weather-card");

      const futureDates = document.createElement("p");
      const description = document.createElement("p");
      const temperature = document.createElement("p");
      const humidity = document.createElement("p");
      const windSpeed = document.createElement("p");

      const weatherIcon = document.createElement("img");
      if (forecast.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
      } else if (forecast.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (forecast.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (forecast.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } else if (forecast.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
      }

      futureDates.innerHTML = `Date: ${date}`;
      description.innerHTML = `Description: ${forecast.weather[0].description}`;
      temperature.innerHTML = `Temperature: ${forecast.main.temp}°C`;
      humidity.innerHTML = `Humidity:  ${forecast.main.humidity}%`;
      windSpeed.innerHTML = `Windspeed: ${forecast.wind.speed}m/s`;
      weatherIcon.alt = `Image displaying weather condition`;
      weatherIcon.loading = "lazy";

      futureWeatherCard.appendChild(weatherIcon);
      futureWeatherCard.appendChild(futureDates);
      futureWeatherCard.appendChild(description);
      futureWeatherCard.appendChild(temperature);
      futureWeatherCard.appendChild(humidity);
      futureWeatherCard.appendChild(windSpeed);

      futureWeather.appendChild(futureWeatherCard);
    });
  };
  fetchApi();
}

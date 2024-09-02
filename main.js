const apiKey = '5f27984f72428787785db8d87a5b5d72';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    const data = await response.json();

    document.querySelector('.city').textContent = data.name;
    document.querySelector('.temp').textContent = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').textContent = data.main.humidity + "%";
    document.querySelector('.wind').textContent = data.wind.speed + " km/h";


    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = 'img/clouds.png';
        break
      case "Clear":
        weatherIcon.src = 'img/clear.png';
        break
      case "Rain":
        weatherIcon.src = 'img/rain.png';
        break
      case "Drizzle":
        weatherIcon.src = 'img/drizzle.png';
        break
      case "Mist":
        weatherIcon.src = 'img/mist.png';
        break
    }
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
  }

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})



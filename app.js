const apiKey = "f7dc49f143a5ae6f2c46677f0d85d7e6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await res.json();
  console.log(data);

  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Drizzle") {
      document.querySelector(".weather img").src = "/img/drizzle.png";
    } else if (data.weather[0].main == "Clouds") {
      document.querySelector(".weather img").src = "/img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      document.querySelector(".weather img").src = "/img/clear.png";
    } else if (data.weather[0].main == "Mist") {
      document.querySelector(".weather img").src = "/img/mist.png";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".weather img").src = "/img/rain.png";
    } else if (data.weather[0].main == "Snow") {
      document.querySelector(".weather img").src = "/img/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

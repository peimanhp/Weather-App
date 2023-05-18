const cityLocation = document.getElementById("location");
const submit = document.getElementById("submit");
const forecastBox = document.querySelector(".forecast");
const cityResult = document.getElementById("city");
const tempResult = document.getElementById("temp");
const feelsResult = document.getElementById("feels");
const humidityResult = document.getElementById("humidity");
const windResult = document.getElementById("wind");

submit.addEventListener("click", getForecast);

async function getForecast(e) {
  e.preventDefault();
  let cityName = cityLocation.value;
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=0833dbacc12941fb8a7144500231705&q=${cityName}`,
    { mode: "cors" }
  );
  if (response.status == 200) {
    let json = await response.json();
    showResult(
      json.location.name,
      json.current.temp_c,
      json.current.feelslike_c,
      json.current.humidity,
      json.current.wind_kph
    );
    return json;
  }
  throw new Error(response.status);
}

function showResult(city, temp, feels, humidity, wind) {
  forecastBox.classList.add("show");
  cityResult.innerText = city;
  tempResult.innerText = `${temp} °C`;
  feelsResult.innerText = `${feels} °C`;
  humidityResult.innerText = `${humidity} %`;
  windResult.innerText = `${wind} km/h`;
}

const cityLocation = document.getElementById("location");
const submit = document.getElementById("submit");

submit.addEventListener("click", getForecast);

async function getForecast() {
  let cityName = cityLocation.value;
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=0833dbacc12941fb8a7144500231705&q=${cityName}`,
    { mode: "cors" }
  );
  if (response.status == 200) {
    let json = await response.json();
      console.log(json);
      console.log(json.current.temp_c)
    return json;
  }
  throw new Error(response.status);
}

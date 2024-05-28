// Add JS here

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "567b1f309amsh380bc66bc20cfd0p17aaabjsn3c349d5e7219",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
async function fetchWeather(city) {
  cityName.innerHTML = city;
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    temp2.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    humidity2.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_speed2.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  fetchWeather(city.value);
});
fetchWeather("Jaipur");

(async () => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo";
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    ttcloud_pct.innerHTML = result.cloud_pct;
    tttemp.innerHTML = result.temp;
    ttfeels_like.innerHTML = result.feels_like;
    tthumidity.innerHTML = result.humidity;
    ttmin_temp.innerHTML = result.min_temp;
    ttmax_temp.innerHTML = result.max_temp;
    ttwind_speed.innerHTML = result.wind_speed;
    ttwind_degrees.innerHTML = result.wind_degrees;
    ttsunrise.innerHTML = result.sunrise;
    ttsunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
})();
(async () => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris";
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    tt1cloud_pct.innerHTML = result.cloud_pct;
    tt1temp.innerHTML = result.temp;
    tt1feels_like.innerHTML = result.feels_like;
    tt1humidity.innerHTML = result.humidity;
    tt1min_temp.innerHTML = result.min_temp;
    tt1max_temp.innerHTML = result.max_temp;
    tt1wind_speed.innerHTML = result.wind_speed;
    tt1wind_degrees.innerHTML = result.wind_degrees;
    tt1sunrise.innerHTML = result.sunrise;
    tt1sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
})();

(async () => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Beijing";
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    tt2cloud_pct.innerHTML = result.cloud_pct;
    tt2temp.innerHTML = result.temp;
    tt2feels_like.innerHTML = result.feels_like;
    tt2humidity.innerHTML = result.humidity;
    tt2min_temp.innerHTML = result.min_temp;
    tt2max_temp.innerHTML = result.max_temp;
    tt2wind_speed.innerHTML = result.wind_speed;
    tt2wind_degrees.innerHTML = result.wind_degrees;
    tt2sunrise.innerHTML = result.sunrise;
    tt2sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
})();

(async () => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Berlin";
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    tt3cloud_pct.innerHTML = result.cloud_pct;
    tt3temp.innerHTML = result.temp;
    tt3feels_like.innerHTML = result.feels_like;
    tt3humidity.innerHTML = result.humidity;
    tt3min_temp.innerHTML = result.min_temp;
    tt3max_temp.innerHTML = result.max_temp;
    tt3wind_speed.innerHTML = result.wind_speed;
    tt3wind_degrees.innerHTML = result.wind_degrees;
    tt3sunrise.innerHTML = result.sunrise;
    tt3sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
})();

(async () => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York";
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    tt4cloud_pct.innerHTML = result.cloud_pct;
    tt4temp.innerHTML = result.temp;
    tt4feels_like.innerHTML = result.feels_like;
    tt4humidity.innerHTML = result.humidity;
    tt4min_temp.innerHTML = result.min_temp;
    tt4max_temp.innerHTML = result.max_temp;
    tt4wind_speed.innerHTML = result.wind_speed;
    tt4wind_degrees.innerHTML = result.wind_degrees;
    tt4sunrise.innerHTML = result.sunrise;
    tt4sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
})();

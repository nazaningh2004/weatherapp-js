const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const input = document.querySelector('.input');
const searchBtn = document.querySelector('.search-btn');
const weatherIcon = document.querySelector('.weather-icon');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const apikey = '7104559e9e87fb371249e3579c68105a';

async function apicall() {
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apikey}&units=metric`;

  const response = await fetch(apiurl);

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  }

  var data = await response.json();
  console.log(input.value + '!!!!');
  console.log(data);

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

  if (data.weather[0].main == 'Clouds') {
    weatherIcon.src = 'images/cloudy.png';
  } else if (data.weather[0].main == 'Clear') {
    weatherIcon.src = 'images/Clear.png';
  } else if (data.weather[0].main == 'Rain') {
    weatherIcon.src = 'images/rain.png';
  } else if (data.weather[0].main == 'Drizzle') {
    weatherIcon.src = 'images/rainsunny.png';
  } else if (data.weather[0].main == 'Mist') {
    weatherIcon.src = 'images/sunny.png';
  }
}

searchBtn.addEventListener('click', () => {
  apicall(input.value);
});

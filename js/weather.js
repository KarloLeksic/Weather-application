// Default coordinates for Osijek
let lat = 45.554962;
let lon = 18.695514;

// Default metric units
let currentUnits = 'metric';

// My API key - free 1 000 000 calls per month / 60 per minute
const API_KEY = '515dec0a2bba409a1646e0869a600cda';

// Api url for onecall 2.5
// https://openweathermap.org/api/one-call-api
let API_URL = ``;

// Define measuring units
const units = {
  standard: {
    temp: 'K',
    wind: 'm/s'
  },
  metric: {
    temp: '&deg;C',
    wind: 'm/s'
  },
  imperial: {
    temp: '&deg;F',
    wind: 'mph'
  }
};

// Weekdays for getting the day's name depending on the day index
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekdayAbbs = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

// Setting the duration of loading animations (ms) only to be seen 
const animationDuration = 1500;

let currLocation = 'Osijek, Hrvatska';


// Inserting weather data for each component on the screen
function drawWeather(data) {
  drawCurrentConditions(data.current);
  draw7dayForecast(data.daily);
  drawHighlights(data.current);
}

// Left side
function drawCurrentConditions(data) {
  const currentWeatherIconEl = document.querySelector('#current-conditions .icon-big');
  const currentTempEl = document.querySelector('#current-temp');
  const currentDayEl = document.querySelector('#day');
  const currentCloudinessEl = document.querySelector('#cloudiness p');
  const currentRainEl = document.querySelector('#rain-probability p');
  const cityimageEl = document.querySelector('#city-img-container');

  currentWeatherIconEl.innerHTML = `<img src="images/${data.weather[0].icon}.svg" alt="current-weather-icon">`;

  currentTempEl.innerHTML = `
    ${Math.round(data.temp)}<sup>${units[currentUnits].temp}</sup>
  `;

  const time = timeStampToTime(data.dt);
  currentDayEl.innerHTML = `
    ${weekday[time.day]}, <span>${time.hours}:${time.minutes}</span>
  `;

  currentCloudinessEl.innerHTML = `${data.clouds}% cloudiness`;
 
  // Set rain if exist
  let rain = data?.rain?.["1h"] || '0';
  currentRainEl.innerHTML = `${rain} mm/h`;

  // Image from https://www.gloucestershirelive.co.uk/news/cheltenham-news/met-office-offers-uk-summer-8658491
  cityimageEl.innerHTML = `
    <img src="images/SUNSHINE.webp" alt="city-image">
    <p>${currLocation}</p>
  `;
}

// Inserting values for the week forecast on the right side on top
function draw7dayForecast(data) {
  const daysEl = document.querySelectorAll('#next-7-days-forecast .day');

  daysEl.forEach((day, idx) => {
    day.innerHTML = `
      <p class="day-in-week">${weekdayAbbs[timeStampToTime(data[idx + 1].dt).day]}</p>
      <img src="images/${data[idx + 1].weather[0].icon}.svg" alt="forecast-icon">
      <div class="temp-container">
        <p class="max-temp">${Math.round(data[idx + 1].temp.max)}&deg;</p>
        <p class="min-temp">${Math.round(data[idx + 1].temp.min)}&deg;</p>
      </div>
    `;
  });
}

// Inserting values in Today's Highlights section
function drawHighlights(data) {
  drawFeelsLike(+data.feels_like);
  drawWindStatus(+data.wind_speed, +data.wind_deg);
  drawSunriseAndSunset(+data.sunrise, +data.sunset);
  drawHumidity(+data.humidity);
  drawVisibility(+data.visibility);
  drawUvIndex(+data.uvi);
}

function drawFeelsLike(feelsLikeTemp) {
  const feelsLikeEl = document.querySelector('#feels-like');

  feelsLikeEl.innerHTML = `
    <p class="highlight-title">Feels like</p>
    <p class="value">
      ${feelsLikeTemp.toFixed(0)}<sup>${units[currentUnits].temp}
    </p>
  `;
}

function drawWindStatus(windSpeed, windDirection) {
  const windStatusEl = document.querySelector('#wind');

  windStatusEl.innerHTML = `
    <p class="highlight-title">Wind Status</p>
    <div class="value-unit">
      <p class="value">${windSpeed.toFixed(1)}</p>
      <p class="unit">${units[currentUnits].wind}</p>
    </div>
    <div class="wind-direction">
      <div class="img-container" style="transform: rotateZ(${windDirection - 45}deg);">
        <i class="fa-solid fa-location-arrow"></i>
      </div>
      <p>${windDirection}&deg;</p>
    </div>
  `;
}

function drawSunriseAndSunset(sunrise, sunset) {
  const sunriseSunsetEl = document.querySelector('#sunrise-sunset');
  const sunriseTime = timeStampToTime(sunrise);
  const sunsetTime = timeStampToTime(sunset);

  sunriseSunsetEl.innerHTML = `
    <p class="highlight-title">Sunrise & Sunset</p>
    <div class="sunrise">
      <img src="images/sunrise-icon.svg" alt="sunrise-icon">
      <p class="time">${sunriseTime.hours}:${sunriseTime.minutes}</p>
    </div>
    <div class="sunset">
      <img src="images/sunset-icon.svg" alt="sunrise-icon">
      <p class="time">${sunsetTime.hours}:${sunsetTime.minutes}</p>
    </div>
  `;
}

function drawHumidity(humidity) {
  const humidityEl = document.querySelector('#humidity');
  let rating = '';

  if (humidity < 40) {
    rating = 'Too Low &#128542';
  } else if (humidity > 60) {
    rating = 'Too High &#128542';
  } else {
    rating = 'Normal &#128512';
  }

  humidityEl.innerHTML = `
    <p class="highlight-title">Humidity</p>
    <div class="value-unit">
      <p class="value">${humidity}</p>
      <p class="unit">%</p>
    </div>
    <p class="rating">${rating}</p>
    <div class="range">
      <div class="circle" style="bottom: ${scale(humidity, 0, 100, 3, 73)}px;"></div>
    </div>
  `;

  document.querySelector('#humidity .range .circle').style.bottom = `
    ${scale(humidity, 0, 100, 3, 73)}px
  `;
}

function drawVisibility(visibility) {
  const visibilityEl = document.querySelector('#visibility');
  let rating = '';

  if (visibility > 8000) {
    rating = 'Excellent &#128512';
  } else if (visibility > 5000) {
    rating = 'Very Good &#128578';
  } else if (visibility > 2000) {
    rating = 'Enough &#128566';
  } else {
    rating = 'Bad &#128542';
  }

  visibilityEl.innerHTML = `
    <p class="highlight-title">Visibility</p>
    <div class="value-unit">
      <p class="value">${(visibility / 1000).toFixed(1)}</p>
      <p class="unit">km</p>
    </div>
    <p class="rating">${rating}</p>
  `;
}

function drawUvIndex(uvIndex) {
  let rating = '';
  let color = '';

  if (uvIndex >= 11) {
    rating = 'Extremely High &#128552';
    color = 'red';
  } else if (uvIndex >= 8) {
    rating = 'Very High &#128547';
    color = 'orange'
  } else if (uvIndex >= 6) {
    rating = 'High &#128528';
    color = 'yellow';
  } else if (uvIndex >= 3) {
    rating = 'Moderate &#128578';
    color = 'lightgreen';
  } else {
    rating = 'Low &#128512';
    color = 'green';
  }

  const uvIndexEl = document.querySelector('#uv-index');
  uvIndexEl.innerHTML = `
    <p class="highlight-title">UV Index</p>
    <p class="value">${uvIndex}</p>
    <p class="rating">${rating}</p>
    <div class="range">
      <div class="circle" style="
        bottom: ${scale(uvIndex, 0, 15, 3, 73)}px; 
        background-color: ${color};">
      </div>
    </div>
  `;
}

// It's needed to update url after changing units
function updateApiUrl() {
  API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${currentUnits}&appid=${API_KEY}`;
}

// Main function for fetching data from API and drawing everything on the screen
async function fetchWeatherData() {
  updateApiUrl();
  
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    // Draw everything
    if (data) {
      drawWeather(data);
      addCityImageFilter();
      removeLoadingAnimation();
    }
  } catch (error) {
    alert(`Something went wrong: ${error.message}.\nMake sure you typed the place name correctly!`);
    location.reload();
  }
}

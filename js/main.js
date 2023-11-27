// Load the dark mode settings and apply them
let darkMode = JSON.parse(localStorage.getItem('savedData'))?.darkMode || false;
setDarkMode();

// Load saved current unit
currentUnits = JSON.parse(localStorage.getItem('savedData'))?.currentUnits || 'metric';
setCurrentUnitsBtnClass();

// Fetching default data on load
// A short wait to see the animation (I know it doesn't apply like this)
removeCityImageFilter();
showDefaultHiglightNames();
setTimeout(() => fetchWeatherData(lat, lon, currentUnits), animationDuration);

// Buttons for changing units
document.querySelectorAll('.temp-units li a').forEach(btn => {
  btn.addEventListener('click', (e) => {
    currentUnits = e.target.getAttribute('data-unit');

    updateLS();
    setCurrentUnitsBtnClass();
    
    removeCityImageFilter();
    addLoadingAnimation();
    showDefaultHiglightNames();
    setTimeout(() => fetchWeatherData(lat, lon, currentUnits), animationDuration);
  });
});

function setCurrentUnitsBtnClass() {
  const unitButtons = document.querySelectorAll('#temp-units li a');
  removeActiveUnitClass();

  if(currentUnits === 'imperial') {
    unitButtons[1].classList.add('active-unit');
  } else {
    unitButtons[0].classList.add('active-unit');
  }
}

// Dark mode
function setDarkMode() {
  if (darkMode === true) {
    document.querySelector('html').classList.add('dark');
    document.querySelector('#dark-mode').checked = true;
  } else {
    document.querySelector('html').classList.remove('dark');
  }
}

const darkModeBtn = document.querySelector('#dark-mode');
darkModeBtn.addEventListener('change', () => {
  darkMode = !darkMode;
  setDarkMode();
  updateLS();
});

// Search for cities
const searchForm = document.querySelector('form');
const cityInputEl = document.querySelector('#search-places');
searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const searchedTerm = cityInputEl.value;
  cityInputEl.value = '';

  drawWeatherForAnotherCity(searchedTerm);
});

async function drawWeatherForAnotherCity(searchedTerm) {
  const city = await getCoordinates(searchedTerm);

  const { fullName, latitude, longitude } = city;
  lat = latitude;
  lon = longitude;
  currLocation = fullName;
  updateLS();

  removeCityImageFilter();
  addLoadingAnimation();
  showDefaultHiglightNames();
  setTimeout(() => fetchWeatherData(lat, lon, currentUnits), animationDuration);
}

function updateLS() {
  localStorage.setItem('savedData', JSON.stringify({ darkMode, currentUnits, lat, lon, currLocation }));
}
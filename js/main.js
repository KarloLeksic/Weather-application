// Fetching default data on load
// A short wait to see the animation (I know it doesn't apply like this)
removeCityImageFilter();
showDefaultHiglightNames();
setTimeout(fetchWeatherData, animationDuration);

// Buttons for changing units
document.querySelectorAll('.temp-units li a').forEach(btn => {
  btn.addEventListener('click', (e) => {
    currentUnits = e.target.getAttribute('data-unit');

    removeActiveUnitClass();
    e.target.classList.add('active-unit');

    removeCityImageFilter();
    addLoadingAnimation();
    showDefaultHiglightNames();
    setTimeout(fetchWeatherData, animationDuration);
  });
});

// Dark mode
const darkModeBtn = document.querySelector('#dark-mode');
darkModeBtn.addEventListener('change', e => {
  document.querySelector('html').classList.toggle('dark');
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

  removeCityImageFilter();
  addLoadingAnimation();
  showDefaultHiglightNames();
  setTimeout(fetchWeatherData, animationDuration);
}
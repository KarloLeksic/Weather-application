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

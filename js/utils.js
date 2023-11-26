// Convert numbers from one range to another
function scale(x, in_min, in_max, out_min, out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// Get the day, hours, and minutes from the passed timestamp
function timeStampToTime(timestamp) {
  const date = new Date(timestamp * 1000);

  const day = date.getDay();
  const hours = date.getHours();
  const m = date.getMinutes();
  const minutes = m < 10 ? '0' + m : m;

  return { day, hours, minutes };
}

// Remove image filter so that the loading animation bg would be the same color as the others
function removeCityImageFilter() {
  const img = document.querySelector('#city-img-container');
  img.style.setProperty('--img-filter', 'rgba(0, 0, 0, 0)');
}

// Returning the filter after animation complete
function addCityImageFilter() {
  const img = document.querySelector('#city-img-container');
  img.style.setProperty('--img-filter', 'rgba(0, 0, 0, .35)');
}

// For unit buttons
function removeActiveUnitClass() {
  const unitButtons = document.querySelectorAll('.temp-units li a');
  unitButtons.forEach(btn => {
    btn.classList.remove('active-unit');
  });
}

// Highlight names are always the same and I want to display each while loading content, so i want to get default titles from data attribute
const higlightNames = document.querySelectorAll('.highlight');

function showDefaultHiglightNames() {
  const highlightsEl = document.querySelectorAll('.highlight');
  highlightsEl.forEach((el, idx) => {
    el.innerHTML = `<p class="highlight-title">${higlightNames[idx].getAttribute('data-highlight-name')}</p>`;
  });
}

// I want to animate elements that contains text before loading the content
const elementsForLoadingAnimation = document.querySelectorAll('.animated-bg');

function removeLoadingAnimation() {
  elementsForLoadingAnimation.forEach(el => {
    el.classList.remove('animated-bg');
  });
}

function addLoadingAnimation() {
  elementsForLoadingAnimation.forEach(el => {
    el.innerHTML = '';
    el.classList.add('animated-bg');
  });
}
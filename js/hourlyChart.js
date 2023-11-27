function drawChart(hourly) {
  const hourlyChartEl = document.querySelector('#hourly-chart');

  const labelsArr = hourly
    .map(hour => timeStampToTime(hour.dt).hours)
    .filter((hour, idx) => { 
      if (idx % 2 === 0) return hour; 
    });
  const tempArr = hourly.map(hour => +hour.temp.toFixed(1));


  new Chart(hourlyChartEl, {
    type: 'line',
    data: {
      labels: labelsArr,
      datasets: [
        {
          label: 'Hourly Temperatures',
          data: tempArr,
          borderColor: 'red',
          tension: 0.4
        }
      ]
    }
  });
}
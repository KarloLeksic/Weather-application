// Samo za testiranje podaci da ne salje requestove svaki put
const data = JSON.parse(`{"lat":45.555,"lon":18.6955,"timezone":"Europe/Zagreb","timezone_offset":3600,"current":{"dt":1700930374,"sunrise":1700891838,"sunset":1700924833,"temp":2.87,"feels_like":-2.5,"pressure":1001,"humidity":65,"dew_point":-2.7,"uvi":0,"clouds":20,"visibility":10000,"wind_speed":7.72,"wind_deg":330,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"rain":{"1h":0.21}},"minutely":[{"dt":1700930400,"precipitation":0},{"dt":1700930460,"precipitation":0},{"dt":1700930520,"precipitation":0},{"dt":1700930580,"precipitation":0},{"dt":1700930640,"precipitation":0},{"dt":1700930700,"precipitation":0},{"dt":1700930760,"precipitation":0},{"dt":1700930820,"precipitation":0},{"dt":1700930880,"precipitation":0},{"dt":1700930940,"precipitation":0},{"dt":1700931000,"precipitation":0},{"dt":1700931060,"precipitation":0},{"dt":1700931120,"precipitation":0},{"dt":1700931180,"precipitation":0},{"dt":1700931240,"precipitation":0},{"dt":1700931300,"precipitation":0},{"dt":1700931360,"precipitation":0},{"dt":1700931420,"precipitation":0},{"dt":1700931480,"precipitation":0},{"dt":1700931540,"precipitation":0},{"dt":1700931600,"precipitation":0},{"dt":1700931660,"precipitation":0},{"dt":1700931720,"precipitation":0},{"dt":1700931780,"precipitation":0},{"dt":1700931840,"precipitation":0},{"dt":1700931900,"precipitation":0},{"dt":1700931960,"precipitation":0},{"dt":1700932020,"precipitation":0},{"dt":1700932080,"precipitation":0},{"dt":1700932140,"precipitation":0},{"dt":1700932200,"precipitation":0},{"dt":1700932260,"precipitation":0},{"dt":1700932320,"precipitation":0},{"dt":1700932380,"precipitation":0},{"dt":1700932440,"precipitation":0},{"dt":1700932500,"precipitation":0},{"dt":1700932560,"precipitation":0},{"dt":1700932620,"precipitation":0},{"dt":1700932680,"precipitation":0},{"dt":1700932740,"precipitation":0},{"dt":1700932800,"precipitation":0},{"dt":1700932860,"precipitation":0},{"dt":1700932920,"precipitation":0},{"dt":1700932980,"precipitation":0},{"dt":1700933040,"precipitation":0},{"dt":1700933100,"precipitation":0},{"dt":1700933160,"precipitation":0},{"dt":1700933220,"precipitation":0},{"dt":1700933280,"precipitation":0},{"dt":1700933340,"precipitation":0},{"dt":1700933400,"precipitation":0},{"dt":1700933460,"precipitation":0},{"dt":1700933520,"precipitation":0},{"dt":1700933580,"precipitation":0},{"dt":1700933640,"precipitation":0},{"dt":1700933700,"precipitation":0},{"dt":1700933760,"precipitation":0},{"dt":1700933820,"precipitation":0},{"dt":1700933880,"precipitation":0},{"dt":1700933940,"precipitation":0}],"hourly":[{"dt":1700928000,"temp":2.93,"feels_like":-2.61,"pressure":1001,"humidity":63,"dew_point":-3.02,"uvi":0,"clouds":34,"visibility":10000,"wind_speed":8.27,"wind_deg":350,"wind_gust":14.25,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1700931600,"temp":2.87,"feels_like":-2.78,"pressure":1001,"humidity":65,"dew_point":-2.7,"uvi":0,"clouds":20,"visibility":10000,"wind_speed":8.55,"wind_deg":346,"wind_gust":14.74,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"pop":0},{"dt":1700935200,"temp":2.78,"feels_like":-2.87,"pressure":1001,"humidity":64,"dew_point":-2.96,"uvi":0,"clouds":33,"visibility":10000,"wind_speed":8.45,"wind_deg":345,"wind_gust":14.86,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1700938800,"temp":2.65,"feels_like":-2.99,"pressure":1002,"humidity":63,"dew_point":-3.26,"uvi":0,"clouds":38,"visibility":10000,"wind_speed":8.32,"wind_deg":344,"wind_gust":14.96,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1700942400,"temp":2.41,"feels_like":-2.97,"pressure":1002,"humidity":64,"dew_point":-3.27,"uvi":0,"clouds":51,"visibility":10000,"wind_speed":7.4,"wind_deg":347,"wind_gust":13.93,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"pop":0},{"dt":1700946000,"temp":1.92,"feels_like":-3.3,"pressure":1003,"humidity":67,"dew_point":-3.14,"uvi":0,"clouds":50,"visibility":10000,"wind_speed":6.65,"wind_deg":346,"wind_gust":12.93,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1700949600,"temp":1.23,"feels_like":-3.7,"pressure":1004,"humidity":70,"dew_point":-3.69,"uvi":0,"clouds":46,"visibility":10000,"wind_speed":5.62,"wind_deg":341,"wind_gust":12.14,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1700953200,"temp":0.76,"feels_like":-3.9,"pressure":1005,"humidity":73,"dew_point":-3.59,"uvi":0,"clouds":37,"visibility":10000,"wind_speed":4.89,"wind_deg":324,"wind_gust":10.71,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1700956800,"temp":0.42,"feels_like":-4.4,"pressure":1005,"humidity":75,"dew_point":-3.4,"uvi":0,"clouds":32,"visibility":10000,"wind_speed":5.01,"wind_deg":309,"wind_gust":11.04,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1700960400,"temp":0.21,"feels_like":-4.39,"pressure":1005,"humidity":79,"dew_point":-2.99,"uvi":0,"clouds":1,"visibility":10000,"wind_speed":4.56,"wind_deg":304,"wind_gust":10.34,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1700964000,"temp":0.08,"feels_like":-5.2,"pressure":1005,"humidity":84,"dew_point":-2.29,"uvi":0,"clouds":5,"visibility":10000,"wind_speed":5.71,"wind_deg":305,"wind_gust":12.12,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1700967600,"temp":0.62,"feels_like":-4.74,"pressure":1006,"humidity":90,"dew_point":-0.86,"uvi":0,"clouds":8,"visibility":10000,"wind_speed":6.15,"wind_deg":307,"wind_gust":12.9,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1700971200,"temp":0.92,"feels_like":-4,"pressure":1007,"humidity":91,"dew_point":-0.41,"uvi":0,"clouds":18,"visibility":10000,"wind_speed":5.44,"wind_deg":301,"wind_gust":10.73,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"pop":0},{"dt":1700974800,"temp":1,"feels_like":-4.05,"pressure":1007,"humidity":91,"dew_point":-0.36,"uvi":0,"clouds":25,"visibility":10000,"wind_speed":5.73,"wind_deg":298,"wind_gust":10.94,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1700978400,"temp":1.35,"feels_like":-3.88,"pressure":1008,"humidity":87,"dew_point":-0.61,"uvi":0,"clouds":31,"visibility":10000,"wind_speed":6.32,"wind_deg":300,"wind_gust":12.03,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"pop":0},{"dt":1700982000,"temp":1.86,"feels_like":-3.27,"pressure":1009,"humidity":81,"dew_point":-1.05,"uvi":0.05,"clouds":82,"visibility":10000,"wind_speed":6.4,"wind_deg":303,"wind_gust":12.08,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1700985600,"temp":3.13,"feels_like":-1.83,"pressure":1009,"humidity":73,"dew_point":-1.15,"uvi":0.22,"clouds":49,"visibility":10000,"wind_speed":6.85,"wind_deg":313,"wind_gust":11.47,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"pop":0},{"dt":1700989200,"temp":3.92,"feels_like":-1.13,"pressure":1010,"humidity":66,"dew_point":-1.8,"uvi":0.69,"clouds":39,"visibility":10000,"wind_speed":7.71,"wind_deg":320,"wind_gust":12.12,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"pop":0},{"dt":1700992800,"temp":4.66,"feels_like":-0.37,"pressure":1011,"humidity":58,"dew_point":-2.86,"uvi":0.96,"clouds":34,"visibility":10000,"wind_speed":8.32,"wind_deg":320,"wind_gust":11.9,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"pop":0},{"dt":1700996400,"temp":4.97,"feels_like":-0.16,"pressure":1011,"humidity":56,"dew_point":-3.02,"uvi":1.01,"clouds":32,"visibility":10000,"wind_speed":8.96,"wind_deg":323,"wind_gust":12.6,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"pop":0},{"dt":1701000000,"temp":5.77,"feels_like":1.07,"pressure":1012,"humidity":54,"dew_point":-2.92,"uvi":0.84,"clouds":35,"visibility":10000,"wind_speed":8.35,"wind_deg":321,"wind_gust":14.68,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"pop":0},{"dt":1701003600,"temp":5.59,"feels_like":0.76,"pressure":1012,"humidity":49,"dew_point":-4.32,"uvi":0.54,"clouds":14,"visibility":10000,"wind_speed":8.59,"wind_deg":320,"wind_gust":16.33,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1701007200,"temp":4.62,"feels_like":-0.41,"pressure":1013,"humidity":50,"dew_point":-4.88,"uvi":0.22,"clouds":8,"visibility":10000,"wind_speed":8.28,"wind_deg":320,"wind_gust":16.44,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1701010800,"temp":3.41,"feels_like":-1.64,"pressure":1014,"humidity":53,"dew_point":-5.23,"uvi":0,"clouds":7,"visibility":10000,"wind_speed":7.29,"wind_deg":318,"wind_gust":12.33,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1701014400,"temp":2.69,"feels_like":-2.09,"pressure":1015,"humidity":56,"dew_point":-5.12,"uvi":0,"clouds":18,"visibility":10000,"wind_speed":6.13,"wind_deg":315,"wind_gust":11.52,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"pop":0},{"dt":1701018000,"temp":2.24,"feels_like":-2.24,"pressure":1016,"humidity":59,"dew_point":-4.99,"uvi":0,"clouds":32,"visibility":10000,"wind_speed":5.23,"wind_deg":309,"wind_gust":10.49,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1701021600,"temp":1.76,"feels_like":-2.59,"pressure":1016,"humidity":62,"dew_point":-4.7,"uvi":0,"clouds":40,"visibility":10000,"wind_speed":4.77,"wind_deg":299,"wind_gust":9.93,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1701025200,"temp":1.3,"feels_like":-3.07,"pressure":1017,"humidity":66,"dew_point":-4.32,"uvi":0,"clouds":52,"visibility":10000,"wind_speed":4.61,"wind_deg":291,"wind_gust":9.38,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"pop":0},{"dt":1701028800,"temp":0.87,"feels_like":-3.54,"pressure":1018,"humidity":70,"dew_point":-3.98,"uvi":0,"clouds":32,"visibility":10000,"wind_speed":4.5,"wind_deg":287,"wind_gust":8.89,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1701032400,"temp":0.42,"feels_like":-3.79,"pressure":1018,"humidity":74,"dew_point":-3.7,"uvi":0,"clouds":23,"visibility":10000,"wind_speed":4.03,"wind_deg":283,"wind_gust":8.2,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"pop":0},{"dt":1701036000,"temp":0.05,"feels_like":-4.22,"pressure":1018,"humidity":76,"dew_point":-3.61,"uvi":0,"clouds":19,"visibility":10000,"wind_speed":4,"wind_deg":280,"wind_gust":8.4,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"pop":0},{"dt":1701039600,"temp":-0.4,"feels_like":-4.38,"pressure":1018,"humidity":79,"dew_point":-3.62,"uvi":0,"clouds":17,"visibility":10000,"wind_speed":3.47,"wind_deg":278,"wind_gust":7.48,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"pop":0},{"dt":1701043200,"temp":-0.63,"feels_like":-4.53,"pressure":1018,"humidity":80,"dew_point":-3.59,"uvi":0,"clouds":16,"visibility":10000,"wind_speed":3.32,"wind_deg":268,"wind_gust":6.76,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"pop":0},{"dt":1701046800,"temp":-0.61,"feels_like":-4.56,"pressure":1018,"humidity":80,"dew_point":-3.59,"uvi":0,"clouds":10,"visibility":10000,"wind_speed":3.38,"wind_deg":257,"wind_gust":6.45,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1701050400,"temp":-0.49,"feels_like":-4.3,"pressure":1018,"humidity":79,"dew_point":-3.6,"uvi":0,"clouds":10,"visibility":10000,"wind_speed":3.24,"wind_deg":248,"wind_gust":6.39,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1701054000,"temp":-0.38,"feels_like":-3.96,"pressure":1018,"humidity":80,"dew_point":-3.45,"uvi":0,"clouds":10,"visibility":10000,"wind_speed":3,"wind_deg":238,"wind_gust":5.64,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1701057600,"temp":-0.35,"feels_like":-3.77,"pressure":1017,"humidity":81,"dew_point":-3.21,"uvi":0,"clouds":9,"visibility":10000,"wind_speed":2.84,"wind_deg":227,"wind_gust":4.88,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1701061200,"temp":-0.26,"feels_like":-3.78,"pressure":1017,"humidity":80,"dew_point":-3.29,"uvi":0,"clouds":9,"visibility":10000,"wind_speed":2.96,"wind_deg":218,"wind_gust":4.62,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1701064800,"temp":-0.25,"feels_like":-3.83,"pressure":1017,"humidity":80,"dew_point":-3.3,"uvi":0,"clouds":10,"visibility":10000,"wind_speed":3.03,"wind_deg":200,"wind_gust":4.94,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1701068400,"temp":0.5,"feels_like":-2.99,"pressure":1017,"humidity":76,"dew_point":-3.14,"uvi":0.09,"clouds":34,"visibility":10000,"wind_speed":3.11,"wind_deg":196,"wind_gust":6.74,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"pop":0},{"dt":1701072000,"temp":2.38,"feels_like":-1.21,"pressure":1016,"humidity":64,"dew_point":-3.72,"uvi":0.33,"clouds":52,"visibility":10000,"wind_speed":3.77,"wind_deg":197,"wind_gust":7,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1701075600,"temp":3.92,"feels_like":0.52,"pressure":1016,"humidity":54,"dew_point":-4.63,"uvi":0.64,"clouds":67,"visibility":10000,"wind_speed":4.02,"wind_deg":189,"wind_gust":6.72,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1701079200,"temp":5.28,"feels_like":2.01,"pressure":1015,"humidity":47,"dew_point":-5.2,"uvi":0.91,"clouds":75,"visibility":10000,"wind_speed":4.36,"wind_deg":189,"wind_gust":6.81,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1701082800,"temp":6.22,"feels_like":3.15,"pressure":1014,"humidity":43,"dew_point":-5.52,"uvi":0.95,"clouds":78,"visibility":10000,"wind_speed":4.39,"wind_deg":194,"wind_gust":6.66,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1701086400,"temp":6.89,"feels_like":4.09,"pressure":1013,"humidity":41,"dew_point":-5.54,"uvi":0.82,"clouds":80,"visibility":10000,"wind_speed":4.18,"wind_deg":196,"wind_gust":6.2,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1701090000,"temp":7.07,"feels_like":4.56,"pressure":1012,"humidity":42,"dew_point":-4.88,"uvi":0.49,"clouds":90,"visibility":10000,"wind_speed":3.7,"wind_deg":195,"wind_gust":5.98,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1701093600,"temp":6.22,"feels_like":4.03,"pressure":1012,"humidity":49,"dew_point":-3.75,"uvi":0.17,"clouds":83,"visibility":10000,"wind_speed":2.92,"wind_deg":192,"wind_gust":5.22,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1701097200,"temp":4.69,"feels_like":2.04,"pressure":1011,"humidity":55,"dew_point":-3.6,"uvi":0,"clouds":86,"visibility":10000,"wind_speed":3.13,"wind_deg":194,"wind_gust":4.16,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0}],"daily":[{"dt":1700906400,"sunrise":1700891838,"sunset":1700924833,"moonrise":1700920140,"moonset":1700883120,"moon_phase":0.43,"temp":{"day":6.06,"min":1.23,"max":6.31,"night":1.23,"eve":2.93,"morn":3.68},"feels_like":{"day":1.85,"night":-3.7,"eve":-2.61,"morn":1.54},"pressure":1001,"humidity":57,"dew_point":-1.69,"wind_speed":8.56,"wind_deg":337,"wind_gust":14.96,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.78,"rain":0.26,"uvi":0.91},{"dt":1700992800,"sunrise":1700978314,"sunset":1701011194,"moonrise":1701008160,"moonset":1700974320,"moon_phase":0.47,"temp":{"day":4.66,"min":0.05,"max":5.77,"night":0.05,"eve":2.69,"morn":0.92},"feels_like":{"day":-0.37,"night":-4.22,"eve":-2.09,"morn":-4},"pressure":1011,"humidity":58,"dew_point":-2.86,"wind_speed":8.96,"wind_deg":323,"wind_gust":16.44,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":34,"pop":0,"uvi":1.01},{"dt":1701079200,"sunrise":1701064790,"sunset":1701097556,"moonrise":1701096540,"moonset":1701065400,"moon_phase":0.5,"temp":{"day":5.28,"min":-0.63,"max":7.07,"night":4.22,"eve":4.58,"morn":-0.35},"feels_like":{"day":2.01,"night":0.67,"eve":2.19,"morn":-3.77},"pressure":1015,"humidity":47,"dew_point":-5.2,"wind_speed":4.4,"wind_deg":156,"wind_gust":9.21,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":75,"pop":0.07,"uvi":0.95},{"dt":1701165600,"sunrise":1701151265,"sunset":1701183922,"moonrise":1701185460,"moonset":1701156180,"moon_phase":0.54,"temp":{"day":5.95,"min":3.94,"max":5.95,"night":4.43,"eve":5.3,"morn":3.94},"feels_like":{"day":4.06,"night":0.84,"eve":2.95,"morn":-0.19},"pressure":997,"humidity":86,"dew_point":3.86,"wind_speed":5.94,"wind_deg":328,"wind_gust":11.12,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":100,"pop":1,"rain":8.24,"uvi":0.33},{"dt":1701252000,"sunrise":1701237738,"sunset":1701270289,"moonrise":1701275040,"moonset":1701246540,"moon_phase":0.57,"temp":{"day":3.05,"min":-0.78,"max":4.95,"night":-0.78,"eve":2.44,"morn":3.95},"feels_like":{"day":-1.86,"night":-4.37,"eve":-1.74,"morn":0.52},"pressure":1012,"humidity":63,"dew_point":-3.34,"wind_speed":6.66,"wind_deg":321,"wind_gust":10.87,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":32,"pop":0.02,"uvi":1.02},{"dt":1701338400,"sunrise":1701324210,"sunset":1701356659,"moonrise":1701365040,"moonset":1701336060,"moon_phase":0.6,"temp":{"day":1.48,"min":-1.82,"max":3.55,"night":0.36,"eve":1.13,"morn":-1.66},"feels_like":{"day":-1.26,"night":-3.42,"eve":-2.8,"morn":-4.49},"pressure":1024,"humidity":54,"dew_point":-6.79,"wind_speed":4.36,"wind_deg":121,"wind_gust":11.07,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":14,"pop":0.29,"snow":0.23,"uvi":2},{"dt":1701424800,"sunrise":1701410681,"sunset":1701443032,"moonrise":1701455460,"moonset":1701424980,"moon_phase":0.63,"temp":{"day":4,"min":0.63,"max":10.16,"night":10.16,"eve":6.93,"morn":1.61},"feels_like":{"day":0.67,"night":9.27,"eve":3.52,"morn":-1.44},"pressure":1013,"humidity":67,"dew_point":-1.59,"wind_speed":5.86,"wind_deg":167,"wind_gust":13.8,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.37,"rain":0.45,"uvi":2},{"dt":1701511200,"sunrise":1701497151,"sunset":1701529407,"moonrise":1701545940,"moonset":1701513240,"moon_phase":0.67,"temp":{"day":15.06,"min":4.38,"max":15.06,"night":4.38,"eve":4.85,"morn":11.46},"feels_like":{"day":14.48,"night":4.38,"eve":1.61,"morn":10.72},"pressure":1000,"humidity":71,"dew_point":9.82,"wind_speed":7.18,"wind_deg":347,"wind_gust":14.53,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":94,"pop":1,"rain":5.46,"uvi":2}]}`);

// Default coordinates for Osijek
let lat = 45.554962;
let lon = 18.695514;
let currentUnits = 'metric';
const API_KEY = '515dec0a2bba409a1646e0869a600cda';

// Api url for onecall 2.5
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

// For test only
//const { current } = data;
//console.log(current);

// Inserting weather data for each component on the screen
function drawWeather(data) {
  drawCurrentConditions(data.current);
  draw7dayForecast(data.daily);
  drawHighlights(data.current);
}

// Left side
function drawCurrentConditions(data) {
  // Set current weather icon
  document.querySelector('#current-weather-icon').src = `images/${data.weather[0].icon}.svg`;

  // Set current temperature
  document.querySelector('#current-temp').innerHTML = `${Math.floor(data.temp)}<sup>${units[currentUnits].temp}</sup>`;

  // Set current day and time
  const time = timeStampToTime(data.dt);
  document.querySelector('#day').innerHTML = `${weekday[time.day]}, <span>${time.hours}:${time.minutes}</span>`;

  // Set cloudiness
  document.querySelector('.cloudiness p').innerHTML = `${data.clouds}% cloudiness`;

  // Set rain
  const rain = data.rain['1h'];
  const rainHTML = !rain ? 'No rain' : `Rain - <span>${rain} mm/h</span>`;
  document.querySelector('.rain-probability p').innerHTML = rainHTML;
}

// Inserting values for the week forecast on the right side on top
function draw7dayForecast(data) {
  const forecastFor7daysEl = document.querySelector('#next-7-days-forecast');
  forecastFor7daysEl.innerHTML = '';

  // For each day starting on next day, not today
  for (let i = 1; i <= 7; i++) {
    // Create element and append it to the main element
    const dayEl = document.createElement('div');
    dayEl.classList.add('day');

    dayEl.innerHTML = `
      <p class="day-in-week">${weekdayAbbs[timeStampToTime(data[i].dt).day]}</p>
      <img src="images/${data[i].weather[0].icon}.svg" alt="forecast-icon">
      <div class="temp-container">
        <p class="max-temp">${Math.floor(data[i].temp.max)}&deg;</p>
        <p class="min-temp">${Math.floor(data[i].temp.min)}&deg;</p>
      </div>
    `;

    forecastFor7daysEl.appendChild(dayEl);
  }
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
  document.querySelector('#feels-like .value').innerHTML = `${feelsLikeTemp.toFixed(0)}<sup>${units[currentUnits].temp}</sup>`;
}

function drawWindStatus(windSpeed, windDirection) {
  document.querySelector('#wind .value-unit').innerHTML = `
  <p class="value">${windSpeed.toFixed(1)}</p>
  <p class="unit">${units[currentUnits].wind}</p>
`;

  document.querySelector('#wind .wind-direction p').innerHTML = `${windDirection}&deg;`;
  document.querySelector('#wind .img-container').style.transform = `rotateZ(${windDirection - 45}deg)`;
}

function drawSunriseAndSunset(sunrise, sunset) {
  const sunriseTime = timeStampToTime(sunrise);
  document.querySelector('#sunrise-sunset .sunrise .time').innerHTML = `${sunriseTime.hours}:${sunriseTime.minutes}`;

  const sunsetTime = timeStampToTime(sunset);
  document.querySelector('#sunrise-sunset .sunset .time').innerHTML = `${sunsetTime.hours}:${sunsetTime.minutes}`;
}

function drawHumidity(humidity) {
  let rating = '';

  if (humidity < 40) {
    rating = 'Too Low &#128542';
  } else if (humidity > 60) {
    rating = 'Too High &#128542';
  } else {
    rating = 'Normal &#128512';
  }

  document.querySelector('#humidity .value').innerHTML = humidity;
  document.querySelector('#humidity .rating').innerHTML = rating;
  document.querySelector('#humidity .range .circle').style.bottom = `${scale(humidity, 0, 100, 3, 73)}px`;
}

function drawVisibility(visibility) {
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

  document.querySelector('#visibility .value').innerHTML = (visibility / 1000).toFixed(1);
  document.querySelector('#visibility .rating').innerHTML = rating;
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

  document.querySelector('#uv-index .value').innerHTML = uvIndex;
  document.querySelector('#uv-index .rating').innerHTML = rating;

  const rangeSliderEl = document.querySelector('#uv-index .range .circle');
  rangeSliderEl.style.bottom = `${scale(uvIndex, 0, 15, 3, 73)}px`;
  rangeSliderEl.style.backgroundColor = color;
}

// Buttons for changing units
document.querySelectorAll('.temp-units li a').forEach(btn => {
  btn.addEventListener('click', (e) => {
    currentUnits = e.target.getAttribute('data-unit');

    removeActiveUnitClass();
    e.target.classList.add('active-unit');

    fetchWeatherData();
  });
});

// It's needed to update url after changing units
function updateApiUrl() {
  API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${currentUnits}&appid=${API_KEY}`;
}

function removeActiveUnitClass() {
  document.querySelectorAll('.temp-units li a').forEach(btn => {
    btn.classList.remove('active-unit');
  });
}

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

// Main function for fetching data from API and drawing everything on the screen
async function fetchWeatherData() {
  updateApiUrl();
  // Commented because of the limited number of requests for free usage
  //const res = await fetch(API_URL);
  //const data = await res.json();

  // Draw everything
  drawWeather(data);
}
// Fetching default data on load
fetchWeatherData();

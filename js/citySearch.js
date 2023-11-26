async function getCoordinates(city) {
  const res = await fetch(`https://geocode.maps.co/search?city=${city}`);
  const data = await res.json();

  const fullName = data[0]?.display_name;
  const latitude = data[0]?.lat;
  const longitude = data[0]?.lon;

  return { fullName, latitude, longitude };
}

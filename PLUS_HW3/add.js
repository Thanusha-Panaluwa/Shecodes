const cities = [
  {
    name: "COLOMBO",
    Country: "Sri Lanka",
    Humidity: 33.56,
    weather: 34
  },

  {
    name: "MUSCUT",
    Country: "Oman",
    Humidity: 30.34,
    weather: 29
  },

  {
    name: "PERTH",
    Country: "Australia",
    Humidity: 19.01,
    weather: 17
  },

  {
    name: "BERLIN",
    Country: "Germany",
    Humidity: 4.09,
    weather: -2
  }
];

let city = prompt("What is your city : ");
let input = city.toUpperCase();

for (let x = 0; x < cities.length; x++) {
  let a = cities[x].weather;
  let b = cities[x].name;
  let c = cities[x].Humidity;
  let e = Math.round((a * 9) / 5 + 32);

  if (b === input) {
    alert(
      "It is currently " +
        a +
        " °C " +
        "(" +
        e +
        " F)" +
        " in " +
        b +
        " with a humidity of " +
        c +
        " %. "
    );
    break;
  } else {
    alert(
      "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
        city
    );
    break;
  }
}

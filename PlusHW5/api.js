//date
let current = document.querySelector("h6");
let date = new Date();
let day = date.getDay();
let hours = date.getHours();
let min = date.getMinutes();

if (day === 1) {
  day = "Monday";
}
if (day === 2) {
  day = "Tuesday";
}
if (day === 3) {
  day = "Wednesday";
}
if (day === 4) {
  day = "Thursday";
}
if (day === 5) {
  day = "Friday";
}
current.innerHTML = day + "  " + hours + " : " + min;

//search input
function showTemperature(response) {
  let temp = document.querySelector("#num");
  //console.log(response.data);
  temp.innerHTML = Math.round(response.data.main.temp);
  let details = document.querySelector("#details");
  details.innerHTML = response.data.main.humidity;
  let speeds = document.querySelector("#speed");
  speeds.innerHTML = response.data.wind.speed;
  //let head = document.getElementsByTagName("h3");
  //head.innerHTML = response.data.main.name;
}
//display input
function myFunction(event) {
  event.preventDefault();
  var cit = document.getElementById("mySearch").value;
  var ca = document.getElementsByTagName("h3");
  ca[0].innerHTML = cit;
  //API
  let apikey = "510692d3097f9d7a6300e39843c365cd";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cit},uk&appid=${apikey}&units=metric`;

  axios.get(apiURL).then(showTemperature);
}
let form = document.querySelector("#form");
form.addEventListener("submit", myFunction);

//current location
function showLocation(response) {
  let details = document.querySelector("h3");
  details.innerHTML = response.data.name;
}

function showPosition(position) {
  //console.log(position);
  //console.log(position.coords.latitude);
  //console.log(position.coords.longitude);
  let lati = position.coords.latitude;
  let longi = position.coords.longitude;
  //alert(longi);

  let apikey = "510692d3097f9d7a6300e39843c365cd";
  let apiLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${apikey}`;
  // let apiLocation = `https://api.openweathermap.org/data/2.5/weather?id=524901&lang=fr&appid=${apikey}`;
  axios.get(apiLocation).then(showTemperature);
  axios.get(apiLocation).then(showLocation);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let locationz = document.querySelector("#location");
locationz.addEventListener("click", getCurrentPosition);

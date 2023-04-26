let city;
const searchBar = document.querySelector("#searchBar");

function search() {
  city = searchBar.value.trim();
  fetchWeatherData(city);
}

function fetchWeatherData(city) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=e00abaa4628542a8b9a121727232604&q=${city}&aqi=no
  `
  )
    .then((response) => {
      if (!response.ok) {
        alert("weather response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("the temp is " + data.current.temp_c);
    });
}

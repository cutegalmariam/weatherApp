let city;
const searchBar = document.querySelector("#searchBar");
function search() {
  city = searchBar.value.trim();
  fetchWeatherData(city);
}

function fetchWeatherData(city) {
  let resp;
  const displayTemp = document.getElementById("displayTemp");
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
      if (data.current.temp_c > 10) {
        console.log("sunny ))");
        var img = document.createElement("img");
        img.src = "Sun.png";
        img.width = 150;
        img.height = 150;
        document.getElementById("imageContainer").appendChild(img);
      } else {
        console.log("cloudy ))");
        var img = document.createElement("img");
        img.src = "cloud.png";
        img.width = 150;
        img.height = 150;

        document.getElementById("imageContainer").appendChild(img);
      }
      resp = city + " " + data.current.temp_c + " °C";
      displayTemp.innerText = resp;
    });
}

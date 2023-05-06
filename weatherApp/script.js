const searchInput = document.querySelector("#search");
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    console.log(searchInput.value);
    search(searchInput.value);
  }
});
searchInput.addEventListener('input', (event) =>{
  if(searchInput.value === ""){
    imageContainer.innerHTML = "";
    displayTemp.innerText ="";
    not_found.innerHTML = "";
    console.log("grape kavtiko!");
  }
});
let city;
const searchValue = searchInput.value;
function search(searchValue) {
  city = searchValue.trim()
  console.log(city);
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
        console.log("error ((");
        var img = document.createElement("img");
        img.src = "404.jpg";
        img.width = 250;
        img.height = 250;
        imageContainer.innerHTML = "";
        displayTemp.innerText =""
        not_found.innerHTML = "";
        document.getElementById("not_found").appendChild(img);
        return;
      }
      
      return response.json();
    }
    )
    .then((data) => {
      
      resp = city + " " + data.current.temp_c + " °C";
      displayTemp.innerText = resp;
      if (data.current.temp_c > 10) {
        console.log("sunny ))");
        var img = document.createElement("img");
        img.src = "Sun.png";
        img.width = 250;
        img.height = 250;
        imageContainer.innerHTML = "";
        not_found.innerHTML = "";
        document.getElementById("imageContainer").appendChild(img);
      } else {
        console.log("cloudy ))");
        var img = document.createElement("img");
        img.src = "cloud.png";
        img.width = 250;
        img.height = 250;
        imageContainer.innerHTML = "";
        not_found.innerHTML = "";
        document.getElementById("imageContainer").appendChild(img);
      }
    })
   
   
}
  

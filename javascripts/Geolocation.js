const weather_h2 = document.getElementById("weather");
const weather_span1 = document.querySelector("#weather span:first-child");
const weather_span2 = document.querySelector("#weather span:last-child");

const API_ID = "da04d792f3514349b357bcd9f3f3a82a";



function onGeoOk(position) {
    console.dir(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
  
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_ID}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weather_span1.innerText = `${data.name}`;
            weather_span2.innerText = `${data.weather[0].main}`;
        });
    
}

function onGeoError() {
    alert("can't find your location!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



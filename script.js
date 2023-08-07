const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather__body = document.querySelector('.weather-body');
async function checkWeather(city){
    const api_key = "4faf56aa489236f13ad4252fc645ad3a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    if(weather_data.cod=='404')
    {
        location_not_found.styele.display = "flex";
        weather__body.style.display = "none";
        console.log("error")
        return;
    }
    location_not_found.style.display="none";
    weather__body.style.display = "flex";
    //console.log(weather_data);
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weatjer[0].description}`;
    humidity.innerHTML = `${weather_data.weather[0]}%`;
    wind_speed.innerHTML = `${weather_data.windspeed}Km/Hr`;

    switch(weather_data[0].main)
    {
        case `Clouds`:
            weather_img.src = "/assets/cloud.png";
            break;
        case `Clear`:
            weather_img.src = "/assets/clear.png";
            break;       
        case `Rain`:
            weather_img.src = "/assets/rainy.png";
            break;
        case `Mist`:
            weather_img.src = "/assets/misty.png";
            break;
        case `Snow`:
            weather_img.src = "/assets/snow.png";
            break;
    }
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})
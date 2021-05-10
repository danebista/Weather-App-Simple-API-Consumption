let API_KEY= "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
    
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
    console.log(URL)
    const responseCity=fetch(URL)
    
    return responseCity
    .then(resolve=> {return resolve.json()})
}

searchCity=()=>{
    const city=document.getElementById('city-input').value;
     getWeatherData(city.toLowerCase()).then((respose)=>
     showWeatherData(respose)
    ).catch(error=> console.log(error));
}

showWeatherData=(weatherData)=>{
    document.getElementById('city-name').innerText=weatherData.name
    document.getElementById('weather-type').innerText=weatherData.weather[0].main;
    document.getElementById('temp').innerText=weatherData.main.temp;
    document.getElementById('min-temp').innerText=weatherData.main.temp_min;
    document.getElementById('max-temp').innerText=weatherData.main.temp_max;

}

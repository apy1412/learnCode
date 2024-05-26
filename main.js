const temperature = document.querySelector(".temperature") 
async function getWeather() {
    const weatherPromise = await fetch("https://api.weather.gov/gridpoints/OKX/27,35/forecast")
    const weatherData = await weatherPromise.json()
    const temperatureData = weatherData.properties.periods[0].temperature
    temperature.textContent = temperatureData
}


getWeather()
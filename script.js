console.log('script loaded')

let response

async function fetchWeatherData() {

    console.log('fetching weather data')

    response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=c228b4d1108390877c1a32b9560bde5b&units=metric')
    response = response.json()
    console.log(response)

    return response
}










async function populateWeatherData() {


    let weatherData = await fetchWeatherData()

    temperature = document.getElementById('temperature')
    temperature.innerHTML = weatherData.main.temp

    
}

populateWeatherData()
console.log('script loaded')

let response

async function fetchWeatherData(location) {

    console.log('fetching weather data')

    response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c228b4d1108390877c1a32b9560bde5b&units=metric`)
    response = response.json()
    console.log(response)

    return response
}




let searchForm = document.getElementById('location-form')
searchForm.addEventListener('submit', function(event) {
    let city = searchForm.city.value

    console.log(`submitting for ${city}`)
    event.preventDefault()
    populateWeatherData(city)

} )





async function populateWeatherData(location) {

    console.log(`populating for ${location}`)

    let weatherData = await fetchWeatherData(location)

    
    let locationText = document.querySelector('h1')
    if (weatherData.cod == '404') {
        locationText.innerHTML = weatherData.message
        return
    }
    locationText.innerHTML = weatherData.name

    temperature = document.getElementById('temperature')
    temperature.innerHTML = weatherData.main.temp + ' Celsius'

    feelsLike = document.getElementById('feels-like')
    feelsLike.innerHTML = 'Feels like ' + weatherData.main.feels_like + ' Celsius'

    humidity = document.getElementById('humidity')
    humidity.innerHTML = weatherData.main.humidity + '%'


    pressure = document.getElementById('pressure')
    pressure.innerHTML = weatherData.main.pressure + ' hPa'

}


import React from 'react'
import WeatherIcon from './WeatherIcon'

function SideWeatherCard({weatherData}) {


  const minAndMaxTemps = (tempNeeded) => {
    
    let minWeather = weatherData[0].main.temp_min
    let maxWeather = weatherData[0].main.temp_max
    weatherData.forEach( timeOfDay => {
      if (timeOfDay.main.temp_min < minWeather){
        minWeather = timeOfDay.main.temp_min
      }
      if (timeOfDay.main.temp_max > maxWeather){
        maxWeather = timeOfDay.main.temp_max
      }
    })
    
    return ((tempNeeded == 'min') ? minWeather : maxWeather)
  }

  const date = new Date((weatherData[0].dt_txt) + ' UTC').toDateString()
 

  return (
    <div>
      <div>
        {date}
      </div>
      <div>
        {weatherData[4].weather[0].description}
      </div>
      <WeatherIcon iconId={weatherData[4].weather[0].icon} />
      <div>
        <p>
          Min: {minAndMaxTemps('min')}°
        </p>
        <p>
          Max: {minAndMaxTemps('max')}°
        </p>
        <p>
          Percipitation: {(weatherData[4].pop) * 100}%
        </p>
      </div>
    </div>
  )
}

export default SideWeatherCard
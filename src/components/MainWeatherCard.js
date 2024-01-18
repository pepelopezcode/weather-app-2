import React, { useContext } from 'react'
import { AppContext } from '../App'


function MainWeatherCard() {

  const {
    currentWeather
  } = useContext(AppContext)




  return (
    <div className='mainWeatherCard'>
      <div className='temperature' >
        {currentWeather.main.temp}°
      </div>
      <div className='weatherIcon' >
        icon
      </div>
      <div className='feelsLikeTemp' >
        feels like {currentWeather.main.feels_like}°
      </div>
      <div className='weatherType' >
        {currentWeather.weather[0].main}
      </div>
      <div className='mainCardSmallInfo' >
        <p className='minTemp'>
        min {currentWeather.main.temp_min}°
        </p>
        <p className='windSpeed'>
          {(currentWeather.wind.speed).toFixed(1)} mph wind
        </p>
        <p className='humidity'>
          {currentWeather.main.humidity}% humidity
        </p>
        <p className='maxTemp'>
        max {currentWeather.main.temp_max}°
        </p>        
        <p className='windDirection'>
          direction
        </p>
        <p className='pop'>
          pop
        </p>
      </div>
    </div>
  )
}

export default MainWeatherCard
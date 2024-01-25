import React from 'react'
import WeatherIcon from './WeatherIcon'


function MainWeatherCard({currentWeather, isFarenheit}) {


  return (
    <div className='mainWeatherCard'>
      <div className='temperature' >
        {Math.round(currentWeather.main.temp)}°
      </div>
        <WeatherIcon iconId={currentWeather.weather[0].icon} className={'mainWeatherCardIcon'} />
      <div className='feelsLikeTemp' >
        feels like {Math.round(currentWeather.main.feels_like)}°
      </div>
      <div className='weatherType' >
        {currentWeather.weather[0].main}
      </div>
      <div className='mainCardSmallInfo' >
        <p className='minTemp'>
        min {Math.round(currentWeather.main.temp_min)}°
        </p>
        <p className='maxTemp'>
        max {Math.round(currentWeather.main.temp_max)}°
        </p>
        <p className='windSpeed'>
          {isFarenheit ? (currentWeather.wind.speed).toFixed(1) + " mph" : (currentWeather.wind.speed).toFixed(1) + " mps"}
        </p>
        <p className='humidity'>
          {currentWeather.main.humidity}% humidity
        </p>
                
      </div>
    </div>
  )
}

export default MainWeatherCard
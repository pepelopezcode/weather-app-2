import React from 'react'


function MainWeatherCard() {

  //temp, feels like, min, max, humidity, weather, windspeed, wind direction, precipitation percent, icon


  return (
    <div className='mainWeatherCard'>
      <div className='temperature' >
        temp
      </div>
      <div className='weatherIcon' >
        icon
      </div>
      <div className='feelsLikeTemp' >
        feels
      </div>
      <div className='weatherType' >
        weather
      </div>
      <div className='mainCardSmallInfo' >
        <p className='minTemp'>
          min
        </p>
        <p className='windSpeed'>
          windspeed
        </p>
        <p className='humidity'>
          humidity
        </p>
        <p className='maxTemp'>
          max
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
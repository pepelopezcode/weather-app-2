import React, { useContext } from 'react'
import SearchBar from '../components/SearchBar'
import MainWeatherCard from '../components/MainWeatherCard'
import SideWeatherCard from '../components/SideWeatherCard'
import Error from '../components/Error'
import { AppContext } from '../App'


function HomePage({locationSubmitted, errorPage}) {

  const {
    modifiedWeatherForWeekData,
    currentWeather,
    isFarenheit
  } = useContext(AppContext)


  return (
    <div className='homePage' >
      <SearchBar />
      
      { errorPage ? <Error /> : (locationSubmitted ? <MainWeatherCard currentWeather={currentWeather} isFarenheit={isFarenheit} /> : null) }
      { errorPage ? null :(modifiedWeatherForWeekData.map((item,index) => ( <SideWeatherCard key={index} weatherData={item}  />)))}
      
    </div>
  )
}

export default HomePage
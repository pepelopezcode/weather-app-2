import React, { useContext } from 'react'
import SearchBar from '../components/SearchBar'
import MainWeatherCard from '../components/MainWeatherCard'
import SideWeatherCard from '../components/SideWeatherCard'
import { AppContext } from '../App'


function HomePage() {

  const {
    locationSubmitted,
    modifiedWeatherForWeekData
  } = useContext(AppContext)


  return (
    <div className='homePage' >
      <SearchBar />
      { locationSubmitted ? <MainWeatherCard /> : null }
      {modifiedWeatherForWeekData.map((item,index) => ( <SideWeatherCard key={index} weatherData={item} />
      ))}
      
    </div>
  )
}

export default HomePage
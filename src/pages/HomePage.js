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
    <div>
      <SearchBar />
      { locationSubmitted ? <MainWeatherCard /> : null }
      {modifiedWeatherForWeekData.map((_,i) => ( <SideWeatherCard key={i} />
      ))}
      
    </div>
  )
}

export default HomePage
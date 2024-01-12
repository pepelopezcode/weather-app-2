import React from 'react'
import SearchBar from '../components/SearchBar'
import MainWeatherCard from '../components/MainWeatherCard'
import SideWeatherCard from '../components/SideWeatherCard'


function HomePage() {
  return (
    <div>
      <SearchBar />
      <MainWeatherCard />
      {[...Array(5)].map((_,i) => (
        <SideWeatherCard key={i} />
      ))}
      
    </div>
  )
}

export default HomePage
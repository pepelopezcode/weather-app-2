import React from 'react'
import SearchBar from '../components/SearchBar'
import MainWeatherCard from '../components/MainWeatherCard'


function HomePage() {
  return (
    <div>
      <SearchBar />
      <MainWeatherCard />
    </div>
  )
}

export default HomePage
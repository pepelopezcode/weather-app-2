import React, { useState, createContext, useEffect } from 'react';
import HomePage from './pages/HomePage';

export const AppContext = createContext();

function App() {

  const [ locationInputted, setLocationInputted ] = useState('');
  const [ lon, setLon ] = useState(null);
  const [ lat, setLat ] = useState(null);

  // const [ weatherInfo, setWeatherInfo ] = useState({});
  // const [  ] = useState();
  // const [  ] = useState();
  // const [  ] = useState();
  // const [  ] = useState();
  // const [  ] = useState();
  // const [  ] = useState();
  // const [  ] = useState();
  // const [  ] = useState();
  // const [  ] = useState();
  //temp, feels like, min, max, humidity, weather, windspeed, wind direction, precipitation percent, icon

  const cityConverter = (event) => {
    event.preventDefault()
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationInputted}&limit=1&appid=7aa52277998e7f8af62c57e1656e9185`)
      .then(response => response.json())
      .then(data => {
        setLon(data[0].lon)
        setLat(data[0].lat)
      })
      
  }
  
  const weatherLookUp = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7aa52277998e7f8af62c57e1656e9185`)
      .then(response => console.log(response.json()))
  }

  useEffect(() => {
    weatherLookUp()
  },[ lon, lat ])
  


  
  return (
    <div>
      <AppContext.Provider
        value={{
          locationInputted,
          setLocationInputted,
          cityConverter
        }}>
      <HomePage />
      </AppContext.Provider>
    </div>
  )
}

export default App
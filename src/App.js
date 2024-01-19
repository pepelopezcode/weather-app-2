import React, { useState, createContext, useEffect } from 'react';
import HomePage from './pages/HomePage';

export const AppContext = createContext();

function App() {

  const [ locationInputted, setLocationInputted ] = useState('');
  const [ lon, setLon ] = useState(null);
  const [ lat, setLat ] = useState(null);
  const [ currentWeather, setCurrentWeather ] = useState({});
  const [ weatherForWeek, setWeatherForWeek ] = useState({});
  const [ locationSubmitted, setLocationSubmitted ] = useState(false);

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
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json()
      })
      .then(data => {
        setLon(data[0].lon)
        setLat(data[0].lat)
      })
      .catch( error => console.error('Fectch Error', error) )
    
    
  }
  
  const weatherLookUp = () => {

    if(lon){
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7aa52277998e7f8af62c57e1656e9185&units=imperial`)
        .then(response => response.json())
        .then(data => setWeatherForWeek(data.list))
    
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7aa52277998e7f8af62c57e1656e9185&units=imperial`)
        .then(response => response.json())
        .then(setCurrentWeather)
    }
    
      
    
  }

  useEffect(() => {
    weatherLookUp();
  },[ lon, lat ])

  useEffect(() => {
    if ( (Object.keys(currentWeather).length !== 0) && ( Object.keys(weatherForWeek).length !== 0 ) ) {
      setLocationSubmitted(true)
      groupWeatherByLocalDateTime(weatherForWeek)
      
    } 
    
  },[ currentWeather, weatherForWeek ])

  const convertUTCToLocal = (utcDateTime) => {
    const utcDate = new Date(utcDateTime + ' UTC');
     
    const localDate = new Date(utcDate.toLocaleString());
  
    return localDate;
  };

  const groupWeatherByLocalDateTime = (data) => {
    const groupedData = {};

    
      data.forEach((entry) => {
      
      const localDateTime = convertUTCToLocal(entry.dt_txt);
      
      const dayOfWeek = localDateTime.getDay();

      if (!groupedData[dayOfWeek]) {
        groupedData[dayOfWeek] = [];
      }

      groupedData[dayOfWeek].push(entry);

    })
  
    console.log(groupedData);
    
    
  };
  

  
  

 

  
  return (
    <div>
      <AppContext.Provider
        value={{
          locationInputted,
          setLocationInputted,
          cityConverter,
          currentWeather,
          locationSubmitted
        }}>
      <HomePage />
      </AppContext.Provider>
    </div>
  )
}

export default App
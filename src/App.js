import React, { useState, createContext, useEffect } from 'react';
import HomePage from './pages/HomePage';

export const AppContext = createContext();

function App() {

  const [ locationInputted, setLocationInputted ] = useState('');
  const [ lon, setLon ] = useState(null);
  const [ lat, setLat ] = useState(null);
  const [ currentWeather, setCurrentWeather ] = useState({});
  const [ rawWeatherForWeekData, setRawWeatherForWeekData ] = useState({});
  const [ modifiedWeatherForWeekData, setModifiedWeatherForWeekData ] = useState([])
  const [ locationSubmitted, setLocationSubmitted ] = useState(false);


  const cityConverter = (event) => {
    event.preventDefault()
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${locationInputted}&limit=1&appid=7aa52277998e7f8af62c57e1656e9185`)
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


  
 


  useEffect(() => {
    if(lon){
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7aa52277998e7f8af62c57e1656e9185&units=imperial`)
        .then(response => response.json())
        .then(data => setRawWeatherForWeekData(data.list))
        .catch(error => console.error('Fetch Error', error));
    
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7aa52277998e7f8af62c57e1656e9185&units=imperial`)
        .then(response => response.json())
        .then(setCurrentWeather)
        .catch(error => console.error('Fetch Error', error));
    }
  },[ lon, lat])



  useEffect(() => {
    if ( (Object.keys(currentWeather).length !== 0) && ( Object.keys(rawWeatherForWeekData).length !== 0 ) ) {
      setLocationSubmitted(true)
      groupWeatherByDayOfWeek(rawWeatherForWeekData)
      
    } 
    // eslint-disable-next-line
  },[ currentWeather, rawWeatherForWeekData ])



  const convertUTCToLocal = (utcDateTime) => {
    const utcDate = new Date(utcDateTime + ' UTC');
     
    const localDate = new Date(utcDate.toLocaleString());
  
    return localDate;
  };



  const groupWeatherByDayOfWeek = (data) => {
    const groupedData = {};

    data.forEach((entry) => {
      
      const localDateTime = convertUTCToLocal(entry.dt_txt);
      
      const dayOfWeek = localDateTime.getDay();

      if (!groupedData[dayOfWeek]) {
        groupedData[dayOfWeek] = [];
      }

      groupedData[dayOfWeek].push(entry);

    })

    weekArranger(groupedData)
    
  };



  const weekArranger = (weekData) => {
    let numberOfDayOfWeek = new Date().getDay();

    const weekOrder = [];

    for (let i = 0; i < 7; i++) {
      if ( numberOfDayOfWeek < 7 ) {
        weekOrder.push(`${numberOfDayOfWeek}`);  
      }else {
        numberOfDayOfWeek = 0;
        weekOrder.push(`${numberOfDayOfWeek}`);
      }
        numberOfDayOfWeek += 1;
    }

    const orderedWeatherWeekData = weekOrder.map(key => weekData[key])

    
    setModifiedWeatherForWeekData(orderedWeatherWeekData.slice(1, -2))
    
  }
  

  
  

 

  
  return (
    <div>
      <AppContext.Provider
        value={{
          locationInputted,
          setLocationInputted,
          cityConverter,
          currentWeather,
          locationSubmitted,
          modifiedWeatherForWeekData
        }}>
      <HomePage />
      </AppContext.Provider>
    </div>
  )
}

export default App
import React, { useState, createContext } from 'react';
import HomePage from './pages/HomePage';

export const AppContext = createContext();

function App() {

  const [ locationInputted, setLocationInputted ] = useState('');

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


  return (
    <div>
      <AppContext.Provider
        value={{
          locationInputted,
          setLocationInputted
        }}>
      <HomePage />
      </AppContext.Provider>
    </div>
  )
}

export default App
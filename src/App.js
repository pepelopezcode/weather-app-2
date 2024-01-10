import React, { useState, createContext } from 'react';
import HomePage from './pages/HomePage';

export const AppContext = createContext();

function App() {

  const [locationInputted, setLocationInputted] = useState('');

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
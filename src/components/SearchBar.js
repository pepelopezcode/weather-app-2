import React, { useContext } from 'react'
import { AppContext } from '../App'

function SearchBar() {

  const { 
    locationInputted,
    setLocationInputted,
    cityConverter,
    isFarenheit,
    setIsFarenheit
  } = useContext(AppContext);

  return (
    <div className='searchBar' >
        <form onSubmit={cityConverter} >
            <input
            type='text'
            id='location'
            value={locationInputted}
            onChange={(e) => setLocationInputted(e.target.value)}
            placeholder='City or City, Country Abbreviation'
            spellCheck="false"
            required
            />
            <button
            type='submit'
            >
              Search
            </button>
        </form>
        <button onClick={() => setIsFarenheit(!isFarenheit)} >
          {isFarenheit ? "F°" : "C°"}
        </button>
    </div>
  )
}

export default SearchBar
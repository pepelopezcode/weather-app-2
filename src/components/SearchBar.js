import React, { useContext } from 'react'
import { AppContext } from '../App'

function SearchBar() {

  const { 
    locationInputted,
    setLocationInputted
  } = useContext(AppContext);

  return (
    <div>
        <form >
            <input
            type='text'
            id='location'
            value={locationInputted}
            onChange={(e) => setLocationInputted(e.target.value)}
            placeholder='City or City,State or Zipcode'
            required
            />
            <button
            type='submit'
            >
              Search
            </button>
        </form>
    </div>
  )
}

export default SearchBar
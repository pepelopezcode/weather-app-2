import React from 'react'

function Error() {
  return (
    <div className='errorContainer' >
      <div className='errorHader'>
        Invalid city name
      </div>
      <div className='errorInfo'>
        <p>(City) or (City, Country abbreviation) </p>
        <p>For example: Texas or Texas, US</p>
      </div>
    </div>
    
  )
}

export default Error
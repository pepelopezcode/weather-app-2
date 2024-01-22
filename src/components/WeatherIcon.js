import React, { useContext, useEffect, useState } from 'react';

import sunny from '../weather_icons/01d.png';
import night from '../weather_icons/01n.png';
import partlyCloudyDay from '../weather_icons/02d.png';
import partlyCloudyNight from '../weather_icons/02n.png';
import cloudy from '../weather_icons/03d.png';
import showers from '../weather_icons/09d.png';
import sunnyRain from '../weather_icons/10d.png';
import nightRain from '../weather_icons/10n.png';
import dayThunder from '../weather_icons/11d.png';
import nightThunder from '../weather_icons/11n.png';
import snow from '../weather_icons/13d.png';
import mist from '../weather_icons/50d.png';

function WeatherIcon({iconId}) {

  const [ imgId, setImgId ] = useState(null)

  const iconMapping = {
    '01d': sunny,
    '01n': night,
    '02d': partlyCloudyDay,
    '02n': partlyCloudyNight,
    '03d': cloudy,
    '03n': cloudy,
    '04d': cloudy,
    '04n': cloudy,
    '09d': showers,
    '09n': showers,
    '10d': sunnyRain,
    '10n': nightRain,
    '11d': dayThunder,
    '11n': nightThunder,
    '13d': snow,
    '13n': snow,
    '50n': mist,
    '50d': mist

  };

  const defaultIcon = sunny;

  useEffect(() => {
    setImgId(iconMapping[iconId] || defaultIcon);
  }, [iconId]);

  // useEffect(() => {
  //   switch (iconId) {
  //     case '01d':
  //       setImgId(sunny);
  //       break;
  //     case '01n':
  //       setImgId(night);
  //       break;
  //     case '02d':
  //       setImgId(partlyCloudyDay);
  //       break;
  //     case '02n':
  //       setImgId(partlyCloudyNight);
  //       break;
  //     case '03d':
  //       setImgId(cloudy);
  //       break;
  //     case '03n':
  //       setImgId(cloudy);
  //       break;
  //     case '04d':
  //       setImgId(cloudy);
  //       break;
  //     case '04n':
  //       setImgId(cloudy);
  //       break;
  //     case '09d':
  //       setImgId(showers);
  //       break;
  //     case '09n':
  //       setImgId(showers);
  //       break;
  //     case '10d':
  //       setImgId(sunnyRain);
  //       break;
  //     case '10n':
  //       setImgId(nightRain);
  //       break;
  //     case '11d':
  //       setImgId(dayThunder);
  //       break;
  //     case '11n':
  //       setImgId(nightThunder);
  //       break;
  //     case '13d':
  //       setImgId(snow);
  //       break;
  //     case '13n':
  //       setImgId(snow);
  //       break;
  //     default:
  //       setImgId(mist);
  //   }
    
  // }, [iconId])
  
  


  return (
    <img src={imgId} alt='weather icon' />
  )
}

export default WeatherIcon
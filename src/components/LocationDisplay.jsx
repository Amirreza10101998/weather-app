import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faCloudSun, faCloudSunRain, faCloudShowersHeavy, faCloudRain, faBolt, faSnowflake, faSmog } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const api = {
  key: "7af830d540a2468f37b6eb04aa77f9bc",
  base: "https://api.openweathermap.org/data/2.5/"
}

const LocationDisplay = () => {
  const [query, setQuery] = useState('London');
  const [weather, setWeather] = useState({});

  const weatherIcons = {
    Clear: faSun,
    'Few clouds': faCloudSun,
    'Scattered clouds': faCloud,
    'Broken clouds': faCloudSunRain,
    'Shower rain': faCloudShowersHeavy,
    Rain: faCloudRain,
    Drizzle: faCloudRain,
    Thunderstorm: faBolt,
    Snow: faSnowflake,
    Mist: faSmog,
    Clouds: faCloud
  }

  useEffect(() => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        console.log(result);
      });
  }, [query]);

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div>
      <main>
        {(typeof weather.main != "undefined") ? (
        <div>

          <div className="location-box">
            <div className="date">{dateBuilder(new Date())}</div>
            <div className="location d-flex align-items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            <div className='pl-2'>{weather.name}, {weather.sys.country}</div>
            </div>
          </div>

          <div className="weather-box mt-5">
            <div>
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather d-flex align-items-center">
              <FontAwesomeIcon icon={weatherIcons[weather.weather[0].main]} />
              <div className='ml-2'>{[weather.weather[0].main]}</div>
            </div>
          </div>

        </div>
        ) : ('')}
        <div className="search-box mt-3">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={e => {
              if (e.key === "Enter") {
                setQuery(e.target.value)
              }
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default LocationDisplay;

import React, {useState} from 'react'
import axios from 'axios'
import { ReactComponent as WeatherGraphic } from './assets/WeatherGraphic.svg';
import { format, add } from 'date-fns'
import { ReactComponent as CloudySunny } from './assets/cloudysunny.svg';
import { ReactComponent as CloudySunnyRainy } from './assets/cloudysunnyrainy.svg';
import { ReactComponent as Sunny } from './assets/sunny.svg';

function App() {
  const [data, setdata] = useState({}) // declare a state for weather response
  const [location, setLocation] = useState('') //declare a state for weather location
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6a8b677415c3a85bc5f353e170442056&units=metric`
  const searchLocation = (event) => { //function that takes in the event (location input search) as an argument and creates api call using axios, passing in the openweather api (with dynamic location parameter), and passes the response from the api into the data state (which will be used to populate weather info).
    if (event.key === 'Enter') {
    axios.get(url)
    .then((response) => {
      setdata(response.data)
      console.log(response.data)
    })
    .catch(error => {
      alert("Your search was unable to be completed. please try again."); // document.getElementById("search-error").style.display = 'block'; // Potential future implementation?
   })
      setLocation('') //set location as empty after search has been complete
    }
  }

  const addHoursToCurrentDate = (time) => {
    console.log(time);  
    const date = new Date();
    console.log(date);
    const newDate = add(date, {hours: time});
    console.log(add(date, {hours: time}));
    return (format(newDate, 'haaa').toLocaleString() + "");
  }
  

  return (
    <div className="app">
      <div className="location-search">
        <label className="visually-hidden" htmlFor="locationsearch">Search Location:</label>
        <input
        value={location}
        onChange={event => setLocation(event.target.value)} //on updating the input, update the location state 
        onKeyPress={searchLocation} //on Enter of input call searchLocation function
        placeholder='Search for a location'
        type="text"
        name="locationsearch"  
        id="locationsearch"
        aria-label="Search" />
      </div>
      {data.name !== undefined &&
  <div className="weather-container">
      <WeatherGraphic />
    <div className="weather-info">
      <time id="current-datetime" dateTime={format(new Date(), 'MM d').toLocaleString() + ""} title="Current date">{format(new Date(), 'EEE MMM d').toLocaleString() + ""}</time>
      {data.weather ? <span id="current-weather" data-value={data.weather[0].main} title="Current weather type">{data.weather[0].main}</span> : null }
      {data.main ? <span id="current-temp" data-value={data.main.temp.toFixed()} title="Current temperature"> {data.main.temp.toFixed()}°C</span> : null } 
    </div> 
    <div className="row">
      <div className="col">
      <CloudySunnyRainy fill="#fff" id="weather-icon-1" alt="Cloudy" aria-label="Cloudy"/>
       <time className="forecast-datetime-1" dateTime={addHoursToCurrentDate(1)}>{addHoursToCurrentDate(1)}</time>
      </div>
      <div className="col">
      <CloudySunnyRainy fill="#fff" id="weather-icon-2" alt="Cloudy" aria-label="Cloudy"/>
        <time id="forecast-datetime-2" dateTime={addHoursToCurrentDate(4)}>{addHoursToCurrentDate(4)}</time>
      </div>
      <div className="col">
      <CloudySunny fill="#fff" id="weather-icon-3" alt="Cloudy" aria-label="Cloudy"/>
        <time id="forecast-datetime-3" dateTime={addHoursToCurrentDate(7)}>{addHoursToCurrentDate(7)}</time>
      </div>
      <div className="col">
      <Sunny fill="#fff" id="weather-icon-4" alt="Cloudy" aria-label="Cloudy"/>
        <time id="forecast-datetime-4" dateTime={addHoursToCurrentDate(10)}>{addHoursToCurrentDate(10)}</time>
      </div>
    </div>
    <div className="location">
      <span id="current-location" title="Current location">{data.name}</span>
    </div>
    </div>
}
    </div>
  );
}

export default App;
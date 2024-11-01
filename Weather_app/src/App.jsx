import { useEffect, useState } from 'react'
import './App.css'



// Images
import searchIcon from './assets/search.png';
import clearIcon from './assets/sun.png';
import cloudIcon from './assets/cloud.png';
import drizzleIcon from './assets/drizzle.png';
import rainIcon from './assets/cloudrain.png';
import windIcon from './assets/wind.png';
import snowIcon from './assets/snow.png';
import humidityIcon from './assets/humidity.png';



function App() {
  //my api key
  
  // to dinamically change the input value
  const [text, setText] = useState("");

  //Creating the state variables
  const [icon, setIcon] = useState(clearIcon);
  const [temp, setTemp] = useState("-");
  const [city, setCity] = useState("-");
  const [country, setCountry] = useState("-");
  const [lat, setLat] = useState("-");
  const [log, setLog] = useState("-");
  const [wind, setWind] = useState("-");
  const [humidity, setHumidity] = useState("-");

  //Creating the icons for the suitable weather
  const weatherIconsMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  //When cioty not found
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  //api key from open weather
  const search = async () =>{  
    setLoading(true);
    let apikey="b8ae82b6a6918116ac0ecfd7acb96712";
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}&units=Metric`;

    //To call api
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if(data.cod === "404"){
        console.log("The city is undefined");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      //To get the data
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      setCity(data.name);
      setCountry(data.sys.country);
      setTemp(Math.floor(data.main.temp));
      setLoading(false);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconsMap[weatherIconCode]  || clearIcon);
      setCityNotFound(false);
    }
    catch (error){
      console.error("An error occured:", error.message);
      setError("An errror occurd while fetching data...");
    }
    finally{
      setLoading(false);
    }
  };

  const Handle_city = (e) =>{
    setText(e.target.value);
  };

  //function for onkeydown 
  const HandleKeyDown = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  //onclick search icon
  const onclicksearch = () =>{
    search();
  };

  const WeatherDetails = ({icon, temp, city, country, lat, log, humidity, wind}) =>{
    return(
    <>
    <div className="image">
      <img src={icon} alt="no" width={120} />
    </div>
    <div className="temp">{temp}℃</div>
    <div className="location">{city}</div>
    <div className="country">{country}</div>
    <div className="cord">
      <div>
        <span className="lat">latitude</span>
        <span>{lat}</span>
      </div>
      <div>
        <span className="log">longitude</span>
        <span>{log}</span>
      </div>
    </div>
    <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="no" width={40} />
          <div className="data">
            <div className="humudity-percentage">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="no" width={40} />
          <div className="data">
            <div className="wind-percentage">{wind} km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
    </div>
    </>
  
    )
  };

  useEffect(function () {
    search();
  }, [])

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text" placeholder="Enter City Name" className='cityInput' onChange={Handle_city} onKeyDown={HandleKeyDown} value={text} />
          <div className="search-icon">
            <img src={searchIcon} alt="search-icon" onClick={onclicksearch} />
          </div>
        </div>


        {loading && <div className="loadingmsg">Loading...</div>}
        {!error && <div className="loadingerrormsg">{error}</div>}
        {cityNotFound && <div className="citynotfound">City not found</div>}

        {!loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind} />}
        <p className="cpoyright">
          Designed by Ashwin K
        </p>
      </div>
    </>
  )
}

export default App

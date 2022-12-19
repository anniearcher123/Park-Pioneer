import React, { useContext, useEffect, useState } from "react";
import { AppContext } from '../context/context';

const Weather = () => {

    const {selectedPark} = useContext(AppContext)
    const [weatherList, setWeatherList] = useState([]);
    let Lat = selectedPark.latitude;
    let Long = selectedPark.longitude;
    console.log("LatLong:", Lat, Long)
    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=8da7a597135d40b7bad151903221712&q=${Lat},${Long}&aqi=no`)
        .then((results) => results.json())
        .then((data) => {
            console.log("Weather:", data);
            let weatherInfo = data.current;
            setWeatherList(weatherInfo);
            console.log("Weather Info:", weatherInfo)
        });
}, []);
console.log(weatherList);

    return(
        <div className="row weather-info">
            <h1>Weather Info:</h1>
            <div className="col-sm conditions">
                <img className="weather-icon" src={weatherList.condition?.icon} ></img>
                <p>{weatherList.condition?.text}</p>
            </div>
            <div className="col-sm">
            <h3>{weatherList.temp_f}°f</h3>
            <p>Temperature:</p>
            </div>
            <div className="col-sm">
            <h3>{weatherList.precip_in} in.</h3>
            <p>Precipitation:</p>
            </div>
        </div>
    )
};

export default Weather;

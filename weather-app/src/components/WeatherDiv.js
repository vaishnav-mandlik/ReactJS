import React, { useEffect, useState } from "react";
import "./Temp.css";
const WeatherDiv = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState();

  let { temp, humidity, pressure, weather, name, speed, country, sunset } =
    tempInfo;
  useEffect(() => {
    if (weather) {
      switch (weather) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-fog");
          break;
        case "Rain ":
          setWeatherState("wi-day-rain");
          break;
        default:
          setWeatherState("wi-day-cloudy");
          break;
      }
    }
  }, [weather]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let sunsetTime = `${date.getHours()}:${date.getMinutes()}`;
  // console.log(sunsetTime);
  return (
    <>
      <div className="widget">
        <div className="weatherIcon">
          <i className={`svg-color wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weather}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp ">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={`svg-color wi wi-sunset`}></i>
              </p>
              <p className="extra-info-leftside">
                {sunsetTime} PM <br /> sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={" svg-color wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br /> Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"svg-color wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br /> Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"svg-color wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br /> Speed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDiv;

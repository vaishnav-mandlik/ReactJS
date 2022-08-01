import React, { useState, useEffect } from "react";
import "./Temp.css";
import WeatherDiv from "./WeatherDiv";
const Temp = () => {
  const [searchValue, setsSearchValue] = useState("Los Angeles");
  const [tempInfo, setTempInfo] = useState({});
  const getData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f2d233bf76ea913a28ebd21f3c89c7c0`;
      const res = await fetch(url);
      const data = await res.json();
      let { temp, humidity, pressure } = data.main;
      let { main: weather } = data.weather[0];
      let { name } = data;
      let { speed } = data.wind;
      let { country, sunset } = data.sys;
      const weatherData = {
        temp,
        humidity,
        pressure,
        weather,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(weatherData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Enter City Name"
            autoFocus
            value={searchValue}
            onChange={(e) => setsSearchValue(e.target.value)}
            id="search"
            className="searchTerm"
          />
          <button className="searchButton" type="search" onClick={getData}>
            Search
          </button>
        </div>
      </div>
      <WeatherDiv tempInfo={tempInfo} />
    </>
  );
};
export default Temp;

import React, {useState, useEffect} from 'react';
import "./style.css";
import "./weathercard";
import WeatherCard from './weathercard';

const Temp = () => {

    const [searchValue, setSearchValue] = useState("Ghaziabad");
    const [tempInfo, setTempInfo] = useState({});
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const getWeatherInfo = async () => {
        try {
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`;

        const res = await fetch(url);
        const data = await res.json();

        const {temp, humidity, pressure} = data.main;
        const {main: weathermood} = data.weather[0]; //changing name to weathermood
        const {name} = data;
        const {speed} = data.wind;
        const {country, sunset} = data.sys;

        const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
        };
            setTempInfo(myNewWeatherInfo);

        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo(); //eslint-disable-next-line
    }, []);

    return (
        <>
        <div className="wrap">
            <div className="search">
                <input type="search" placeholder="search..."  autoFocus id="search" className="searchTerm" 
                value = {searchValue}
                onChange = {(event) => setSearchValue(event.target.value)}
                />
                <button className="searchButton" type="button" onClick={getWeatherInfo}> Search </button>
            </div>
        </div>  

        <WeatherCard {...tempInfo} /> {/* Destructing */}


        </>
    );
};

export default Temp;
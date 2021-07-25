import React, {useState, useEffect} from 'react'

const WeatherCard = ({
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
}) => {

    const [weatherState, setWeatherState] = useState(" ");

    useEffect(() => {
        if(weathermood) {
            switch (weathermood) {
                case "Clouds": setWeatherState("wi-day-cloudy");
                    break;
                case "Haze": setWeatherState("wi-fog");
                    break;
                case "Clear": setWeatherState("wi-day-sunny");
                    break;
                case "Mist": setWeatherState("wi-dust");
                    break;

                default: setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood])

    //converting the seconds into time
    var sec = sunset;
    var date = new Date(sec*1000);
    var timeStr = `${date.getHours()}:${date.getMinutes()}`

    return (
        <>
        {/* Temp Card */}
        <article className="widget">
            <div className="weatherIcon">
                <i className={`wi ${weatherState}`}></i>
            </div>

            <div className="weatherInfo">
                <div className="temperature">
                    <span>{temp}&deg;</span>
                </div>

                <div className="description">
                    <div className="weatherCondition">{weathermood}</div>
                    <div className="place">{name}, {country}</div>
                </div>
            </div>

                <div className="date">{new Date().toLocaleString()}</div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <span> 
                            <i className={"wi wi-sunset"}></i> 
                        </span>
                        <p className="extra-info-leftside">{timeStr}PM<br /> Sunset
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <span> 
                            <i className={"wi wi-humidity"}></i> 
                        </span>
                        <p className="extra-info-leftside"> {humidity} <br /> Humidity
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <span> 
                            <i className={"wi wi-rain"}></i> 
                        </span>
                        <p className="extra-info-leftside"> {pressure} <br /> Pressure
                        </p>
                    </div>
                    
                    <div className="two-sided-section">
                        <span> 
                            <i className={"wi wi-strong-wind"}></i> 
                        </span>
                        <p className="extra-info-leftside"> {speed} <br /> Speed
                        </p>
                    </div>

                    </div>
                </div>
        </article>
        </>
    )
}

export default WeatherCard;
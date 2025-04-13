import { useState } from "react"

export default function Weather() {
    let [city, setCity] = useState('');


    let getData = (e) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c`)
            .then((finalRes) => {
                console.log(finalRes)
            })
        console.log(city);
        e.preventDefault();
    }

    return (<>
        <form action="#" onSubmit={getData}>
            <div className="weather-card">
                <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City Name" required />
                <button type="submit">Submit</button>
                <div className="weath-date">
                    <p>Today, 22 Nov 2024</p>
                    <p>Min 24°</p>
                    <p>Max 24°</p>
                </div>
                <section className="city">
                    <h6>
                        <i className="fa fa-map-marker" style={{ "font-size": "30px" }} />
                        <span> &nbsp; {city}</span>
                    </h6>
                </section>
                <div className="weather-temp">
                    <p><i className="weather-icon">☀</i>&nbsp; &nbsp; 24°C</p>
                    <div className="surice">
                        <p>Sunrise</p>
                        <p>8:10 AM</p>
                    </div>
                    <div className="sunset">
                        <p>Sunset</p>
                        <p>5:40 PM</p>
                    </div>
                </div>
                <main className="weather-main">
                    <div className="weather-temp">
                        <p><i className="icon">☀</i> 24°C</p>
                        <div className="surice">
                            <p>Min</p>
                            <p>18°</p>
                        </div>
                        <div className="sunset">
                            <p>Max</p>
                            <p>27°</p>
                        </div>
                    </div>
                    <div className="weather-temp">
                        <p><i className="icon">☀</i> 24°C</p>
                        <div className="surice">
                            <p>Min</p>
                            <p>18°</p>
                        </div>
                        <div className="sunset">
                            <p>Max</p>
                            <p>27°</p>
                        </div>
                    </div>
                </main>
                <div className="main-sect">
                    <p>Air Quality:</p>
                    <div className="air-section">
                        <div className="temp">
                            <p>76</p>
                            <p>pg/m³</p>
                        </div>
                        <div className="temp">
                            <p> - </p>
                            <p>AQI</p>
                        </div>
                        <div className="temp">
                            <p>95</p>
                            <p>PM10</p>
                        </div>
                    </div>
                    <p>Other Parameters:</p>
                    <div className="air-section">
                        <div className="temp">
                            <p> - </p>
                            <p>PRECIPITATION</p>
                        </div>
                        <div className="temp">
                            <p> - </p>
                            <p>UV INDEX</p>
                        </div>
                        <div className="temp">
                            <p>2kmph</p>
                            <p>WIND (S)</p>
                        </div>
                        <div className="temp">
                            <p> 50% </p>
                            <p>HUMIDITY</p>
                        </div>
                        <div className="temp">
                            <p>1013pa</p>
                            <p>PRESSURE</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    </>)
}
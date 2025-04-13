import React from "react";
import { useEffect, useState } from 'react';

export default function Weath() {
    const [city, setCity] = useState("surat");
    const [weatherData, setWeatherData] = useState();
    const [sunrise, setSunrise] = useState();
    const [sunset, setSunset] = useState();
    const [weatherHistory, setWeatherHistory] = useState([]);

    const currentDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    const tomoDate = currentDate.getDate() + 1;
    const tommoDate = currentDate.getDate() + 2;

    const dateTime = `${month} ${date}, ${year}`;

    // const API_KEY = "84cdb916ad8a55c00798de3566c90d41";

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84cdb916ad8a55c00798de3566c90d41&units=metric`);
            const data = await response.json();
            console.log(data);
            setWeatherData(data);
            setSunrise(new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }));
            setSunset(new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }));
            setWeatherHistory((preHistory) => [
                ...preHistory,
                {
                    date: dateTime,
                    city: data.name,
                    temp: `${data.main.temp}°C`,
                    desc: data.weather[0].main,
                },
            ]);
        } catch (error) {
            console.log("Fetching is not success..", error);
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, [])

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
        setWeatherData("");
    };

    return (
        <div>
            {weatherData && (
                <div className="d-flex justify-content-center">
                    <div className="weather-dashboard mt-5">
                        <div className="card ">
                            <div className="card-header teb1">
                                <form className="form text-center" onSubmit={handleSubmit}>
                                    <input type="search" className="input border border-black" placeholder="Enter city name..." onChange={handleInputChange} required />
                                    <button type="submit" className="btn btn-success mx-1 btn-outline-info text-dark">Submit</button>
                                </form>
                                <div className="d-flex">
                                    <p className="justify-content text-white mt-3">{dateTime}</p>
                                    <div className="min d-flex mt-3">
                                        <p>Min {weatherData.main.temp_min}°</p>
                                        <p>Max {weatherData.main.temp_max}°</p>
                                    </div>
                                </div>
                                <p className="tex"><i className="fa-solid fa-location-dot" /> {weatherData.name},<span className="fw-bold"> {weatherData.sys.country}</span>
                                </p>
                                <div className="d-flex justify-content-between">
                                    <div className="h3 d-flex temprature">
                                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
                                        {/* <i className="fa-solid fa-sun" style={{ "color": "#fffb1c" }} /> */}
                                        <span className="fw-bold text-white mt-4">{weatherData.main.temp}°C</span>
                                    </div>
                                    <div className="d-flex timebox" style={{ "font-size": "0.90rem" }}>
                                        <p>Sunrise<br /> {sunrise}</p> &nbsp;&nbsp;
                                        <p>Sunset<br />{sunset}</p>
                                    </div>
                                </div>
                                <p className="description">{weatherData.weather[0].main}</p>
                            </div>
                            <div className="card-header teb2 tex">
                                <p className="mt-4"><span className="fw-bold">Air</span> Quality</p>
                                <div className="d-flex justify-content-between">
                                    <p className="h6 fw-bold">79 <span className="etex">µg/m³</span><br /><span className="btex">PM2.5</span></p>
                                    <p className="h6 fw-bold">--<br /><span className="btex">AQL</span></p>
                                    <p className="h6 fw-bold">95<br /><span className="btex">PM10</span></p>
                                </div>
                                <p><span className="fw-bold mt-5">Other</span> Parameters</p>
                                <div className="d-flex justify-content-between">
                                    <p className="h6 fw-bold">{weatherData.main.feels_like}<br /><span className="btex">PRECIPITATION</span></p>
                                    <p className="h6 fw-bold">--<br /><span className="btex">UV INDEX</span></p>
                                    <p className="h6 fw-bold">{weatherData.wind.speed}<span className="etex">km/h</span><br /><span className="btex">WIND(S)</span></p>
                                </div>
                                <div className="d-flex pt-3 boldp">
                                    <p className="h6 fw-bold">{weatherData.main.humidity}<span className="etex">%</span><br /><span className="btex">HUMIDITY</span></p>
                                    <p className="h6 fw-bold mx-5 px-4">{weatherData.main.pressure}<span className="etex">PA</span><br /><span className="btex">PRESSURE</span></p>
                                </div>
                            </div>
                            <div className="datebox">
                                <div className="datetex">
                                    <div className="d-flex flex-row justify-content-center" style={{ "font-size": "0.70rem" }}>
                                        <p className="m-3"><i className="fa-solid fa-sun mx-1" style={{ "color": "#fffb1c" }} />{tomoDate}</p>
                                        <div className="p-2">Min 18°<br />Max 24°</div>
                                        <p className="m-3"><i className="fa-solid fa-sun mx-1" style={{ "color": "#fffb1c" }} /> {tommoDate}</p>
                                        <div className="p-2">Min 18°<br />Max 27°</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* weather history tabel */}
                    <div className="p-3 history-table">
                        <h3 className="mb-4 text-center fw-bold">Weather History</h3>
                        <table className="table table-primary table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>City</th>
                                    <th>Temperature</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {weatherHistory.map((ele, Index) => {
                                    return (
                                        <tr key={Index}>
                                            <td>{ele.date}</td>
                                            <td>{ele.city}</td>
                                            <td>{ele.temp}</td>
                                            <td>{ele.desc}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* end history table */}
                </div>
            )}
        </div>
    );
}

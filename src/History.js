import React, { useState } from "react";

const History = () => {
    const [weatherHistory, setWeatherHistory] = useState([
        {
            city : "Ahmedabad",
            temperature : "22",
            sunrice : "7:22AM",
            sunset : "6:22PM",
        },
        {
            city : "Mumbai",
            temperature : "25",
            sunrice : "7:25AM",
            sunset : "6:25PM",
        }
    ]);
    return (
        <div className="history-table">
           {weatherHistory.map((e) => {
            return (
                <div className="p-2">
                <p>City : {e.city}</p>
                <p>Temperature : {e.temperature}</p>
                <p>Sunrice : {e.sunrice}</p>
                <p>Sunset : {e.sunset}</p>
            </div>
            )
           })}
        </div>
    )
}

export default History;
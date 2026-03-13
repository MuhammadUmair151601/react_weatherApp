import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "c8c01d6a4aa8a1d625798c75254f9545";

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Weather not found");
      setWeather(null);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0F172A]">
      <div className="bg-[#1E293B] border border-[#334155] h-120 w-100 text-blue-500 shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-2xl p-6">
        <h1 className="text-3xl font-bold flex justify-center mb-6">Weather Check</h1>
        <div className="flex flex-col items-center gap-4">
          <input
            className="bg-gray-600 text-white px-5 py-2 rounded-[7px] w-72 outline-none"
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 text-gray-200 text-lg font-semibold px-4 py-1 rounded-lg cursor-pointer active:scale-90 duration-300"
            onClick={fetchWeather}
          >
            Get Weather
          </button>
        </div>
        {weather && (
          <div className="flex flex-col gap-2 items-center justify-center  py-3 bg-gray-700 rounded-[10px] mt-5">
            <h1 className="text-white font-bold text-2xl"> 
              {weather.name}, {weather.sys.country}
              </h1>
              <p><span className="font-semibold  text-white">Temperature : </span>{weather.main.temp}</p>
              <p><span className="font-semibold  text-white">Feels like : </span>{weather.main.feels_like}</p>
              <p><span className="font-semibold  text-white">Humidity : </span>{weather.main.humidity}%</p>
              <p><span className="font-semibold  text-white">wind speed : </span>{weather.wind.speed}</p>
              <p><span className="font-semibold  text-white">Condition : </span>{weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
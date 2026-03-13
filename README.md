import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState(""); 
  const [weatherData, setWeatherData] = useState(null); 

  const API_KEY = "c8c01d6a4aa8a1d625798c75254f9545";

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("City not found");
      setWeatherData(null);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0F172A]">
      <div className="bg-[#1E293B] border border-[#334155] h-120 w-100 text-blue-500 shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-2xl p-6">
        <h1 className="text-3xl font-bold flex justify-center mb-6">
          Weather Check
        </h1>
        <div className="flex justify-center mb-4">
          <input
            className="bg-gray-600 text-white px-5 py-2 rounded-[7px] w-72 outline-none"
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={handleCityChange}
          />
          <button
            className="bg-[#38BDF8] text-black px-4 py-2 rounded-lg ml-2"
            onClick={fetchWeather}
          >
            Get Weather
          </button>
        </div>

        {weatherData && (
          <div className="text-white mt-4 text-center bg-gray-700 rounded-[7px] flex flex-col gap-3 py-5">
            <p className="text-2xl font-semibold">
              {weatherData.name}, {weatherData.sys.country}
            </p>
            <p>
              <span className="font-semibold text-lg text-blue-500">
                Temperature: 
              </span>
              {weatherData.main.temp}°C
            </p>
            <p>
              <span className="font-semibold text-lg text-blue-500">
                Humidity:
              </span>
              {weatherData.main.humidity}%
            </p>
            <p>
              <span className="font-semibold text-lg text-blue-500">Wind:</span>{" "}
              {weatherData.wind.speed} m/s
            </p>
            <p>
              <span className="font-semibold text-lg text-blue-500">
                Condition:
              </span>
              {weatherData.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# react_weatherApp

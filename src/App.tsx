import "./index.css";

import React, { useState } from "react";
import axios from "axios";
import WeatherSearchBar from "./components/WeatherSearchBar";
import WeatherToday from "./components/WeatherToday";
import SearchHistory from "./components/SearchHistory";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState<any>(null);
  console.log("🚀 ~ App ~ weather:", weather);
  const [history, setHistory] = useState<any[]>([]);

  const handleSearch = async () => {
    console.log("handleSearch called");
    if (!city) return;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: `${city}`,
            appid: import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY,
            units: "metric",
          },
        }
      );
      console.log("🚀 ~ handleSearch ~ res:", res);
      const data = res.data;
      console.log("🚀 ~ handleSearch ~ data:", data);
      setWeather(data);
      setCountry(data.sys.country);

      setHistory([
        { city, country, time: new Date().toLocaleTimeString() },
        ...history,
      ]);
    } catch (error) {
      console.log("🚀 ~ handleSearch ~ error:", error);
      alert("City not found!");
    }
  };

  const handleClear = () => {
    setCity("");
    setCountry("");
    setWeather(null);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-dark.png')" }}
    >
      <div className="w-full max-w-2xl mx-auto pt-8 px-2">
        <WeatherSearchBar
          city={city}
          country={country}
          onCityChange={setCity}
          onCountryChange={setCountry}
          onSearch={handleSearch}
          onClear={handleClear}
        />
        {weather && (
          <WeatherToday
            city={weather.name}
            country={weather.sys.country}
            main={weather.weather[0].main}
            description={weather.weather[0].description}
            temp={weather.main.temp}
            tempMin={weather.main.temp_min}
            tempMax={weather.main.temp_max}
            humidity={weather.main.humidity}
            time={new Date(weather.dt * 1000).toLocaleString()}
          >
            {history.length > 0 && (
              <SearchHistory
                history={history}
                onView={() => {}}
                onDelete={() => {}}
              />
            )}
          </WeatherToday>
        )}
      </div>
    </div>
  );
}

export default App;

import "./index.css";

import React, { useState } from "react";
import axios from "axios";
import WeatherSearchBar from "./components/WeatherSearchBar";
import WeatherToday from "./components/WeatherToday";
import SearchHistory from "./components/SearchHistory";

interface WeatherData {
  name: string;
  sys: { country: string };
  weather: { main: string }[];
  main: { temp: number; temp_min: number; temp_max: number; humidity: number };
  dt: number;
}

interface HistoryItem {
  city: string;
  country: string;
  time: string;
}

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleSearch = async (cityParam?: string) => {
    const searchCity = cityParam || city;
    if (!searchCity) return;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: `${searchCity}`,
            appid: import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY,
            units: "metric",
          },
        }
      );
      const data = res.data;
      setWeather(data);

      setHistory([
        { city: searchCity, country: data.sys.country, time: new Date().toLocaleTimeString() },
        ...history,
      ]);
      setCity("");
    } catch {
      alert("City not found!");
    }
  };

  const handleViewHistory = (index: number) => {
    const item = history[index];
    setCity(item.city);
    handleSearch(item.city);
  };

  const handleDeleteHistory = (index: number) => {
    setHistory(history => history.filter((_, i) => i !== index));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-dark.png')" }}
    >
      <div className="w-full max-w-2xl mx-auto pt-8 px-2">
        <WeatherSearchBar
          city={city}
          onCityChange={setCity}
          onSearch={handleSearch}
        />
        {weather && (
          <WeatherToday
            city={weather.name}
            country={weather.sys.country}
            main={weather.weather[0].main}
            temp={weather.main.temp}
            tempMin={weather.main.temp_min}
            tempMax={weather.main.temp_max}
            humidity={weather.main.humidity}
            time={new Date(weather.dt * 1000).toLocaleString()}
            searchHistory={
              history.length > 0 && (
                <SearchHistory
                  history={history}
                  onView={handleViewHistory}
                  onDelete={handleDeleteHistory}
                />
              )
            }
          />
        )}
      </div>
    </div>
  );
}

export default App;

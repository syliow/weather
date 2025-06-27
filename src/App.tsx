import "./index.css";

import { useState } from "react";
import axios from "axios";
import WeatherSearchBar from "./components/WeatherSearchBar";
import WeatherToday from "./components/WeatherToday";
import SearchHistory from "./components/SearchHistory";
import { ERROR_EMPTY_INPUT, ERROR_INVALID_CITY } from "./helper/Constant";

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
  // error can be a string (ex: "City not found!") or null (no error)
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (cityParam?: string) => {
    // Fetch weather data for the given city and update state
    const searchCity = cityParam || city;
    if (!searchCity) {
      setError(ERROR_EMPTY_INPUT);
      return;
    }
    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: searchCity,
            appid: import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY,
            units: "metric",
          },
        }
      );
      const data = res.data;
      setWeather(data);
      setHistory([
        {
          city: searchCity,
          country: data.sys.country,
          time: new Date().toLocaleString(),
        },
        ...history,
      ]);
      setCity("");
      setError(null);
    } catch {
      setError(ERROR_INVALID_CITY);
    }
  };

  const handleViewHistory = (index: number) => {
    const item = history[index];
    setCity(item.city);
    handleSearch(item.city);
  };

  // Remove a city from the search history when delete button is clicked
  const handleDeleteHistory = (index: number) => {
    setHistory((history) => history.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto pt-8 px-2">
        <WeatherSearchBar
          city={city}
          onCityChange={setCity}
          onSearch={handleSearch}
        />
        {/* Error Message  */}
        {error && (
          <div className="text-red-500 text-md text-center mt-2 mb-2">
            {error}
          </div>
        )}
        {/* Only show weather card if we have data, otherwise hide it*/}
        {weather && (
          <WeatherToday
            city={weather.name}
            country={weather.sys.country}
            main={weather.weather[0].main}
            temp={weather.main.temp}
            tempMin={weather.main.temp_min}
            tempMax={weather.main.temp_max}
            humidity={weather.main.humidity}
            // Convert timestamp from open weather api to local date + time string
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

import "./index.css";

import { useState } from "react";
import axios from "axios";
import WeatherSearchBar from "./components/WeatherSearchBar";
import WeatherToday from "./components/WeatherToday";
import SearchHistory from "./components/SearchHistory";
import {
  ERROR_API_LIMIT_PER_MINUTE,
  ERROR_EMPTY_INPUT,
  ERROR_GENERIC,
  ERROR_INVALID_API_KEY,
  ERROR_INVALID_CITY,
} from "./helper/constant";
import type { HistoryItem, WeatherData } from "./helper/types";

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
    } catch (error) {
      console.log(error, "error");
      if (axios.isAxiosError(error) && error.response) {
        switch (error.response.status) {
          // https://openweathermap.org/faq#error404
          // Error 404 is caused by invalid or incorrect city name
          case 404:
            setError(ERROR_INVALID_CITY);
            break;
          // https://openweathermap.org/faq#error401
          // Error 401 is caused by wrong API key
          case 401:
            setError(ERROR_INVALID_API_KEY);
            break;
          // https://openweathermap.org/faq#error429
          // Error 429 is caused by making more than 60 API calls per minute (free plan)
          case 429:
            setError(ERROR_API_LIMIT_PER_MINUTE);
            break;
          default:
            setError(ERROR_GENERIC);
        }
      }
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

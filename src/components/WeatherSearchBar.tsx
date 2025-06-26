import React from "react";

interface WeatherSearchBarProps {
  city: string;
  country: string;
  onCityChange: (value: string) => void;
  onCountryChange: (value: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

const WeatherSearchBar: React.FC<WeatherSearchBarProps> = ({
  city,
  country,
  onCityChange,
  onCountryChange,
  onSearch,
  onClear,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <div>
        <strong>Today's Weather</strong>
      </div>
      <div>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            className="border border-gray-300 rounded px-2 py-2"
            placeholder="Enter city"
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
          />
        </label>
        <button className="bg-blue-500" type="submit">
          Search
        </button>
        <button type="button" onClick={onClear} className="ml-2 bg-gray-500">
          Clear
        </button>
      </div>
    </form>
  );
};

export default WeatherSearchBar;

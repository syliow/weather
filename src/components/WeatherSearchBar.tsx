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
      onSubmit={e => {
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
            onChange={e => onCityChange(e.target.value)}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={e => onCountryChange(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
        <button type="button" onClick={onClear}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default WeatherSearchBar;

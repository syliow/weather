import React from "react";

interface WeatherSearchBarProps {
  city: string;
  onCityChange: (value: string) => void;
  onSearch: () => void;
}

const WeatherSearchBar: React.FC<WeatherSearchBarProps> = ({
  city,
  onCityChange,
  onSearch,
}) => {
  return (
    <form
      className="w-full flex items-center gap-3 mb-6"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <div className="relative flex-1">
        <input
          type="text"
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          placeholder=" "
          className="w-full bg-[#1A1A1A80] text-white px-6 py-6 rounded-2xl shadow-lg backdrop-blur-md"
        />
        <label className="absolute left-6 top-2 text-xs text-white/40">
          City or Country
        </label>
      </div>
      <button
        type="submit"
        className="p-3 rounded-2xl md:p-4 md:rounded-3xl bg-[#28124D] text-white shadow-lg cursor-pointer"
      >
        <img
          src="/search_white.svg"
          alt="Search"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </button>
    </form>
  );
};

export default WeatherSearchBar;

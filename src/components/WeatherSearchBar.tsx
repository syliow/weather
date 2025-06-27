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
          className="w-full bg-[#1A1A1A80] text-white px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent transition-all duration-200 border-none shadow-lg backdrop-blur-md"
        />
        <label className="absolute left-6 top-2 text-xs text-white/70 pointer-events-none transition-all duration-200">
          City or Country
        </label>
      </div>
      <button
        type="submit"
        className="px-6 py-4 rounded-2xl bg-[#28124D] transition-colors duration-200 text-white shadow-lg cursor-pointer"
      >
        <img src="/search_white.svg" alt="Search" className="w-8 h-8" />
      </button>
      {/* Hiding the clear button for now */}
      {/* <button
        type="button"
        onClick={onClear}
        className="px-6 py-4 rounded-2xl bg-[#1A1A1A80] hover:bg-[#1A1A1Acc] transition-colors duration-200 text-white shadow-lg cursor-pointer"
      >
        Clear
      </button> */}
    </form>
  );
};

export default WeatherSearchBar;

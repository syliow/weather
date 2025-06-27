import React from "react";
import type { ReactNode } from "react";

interface WeatherTodayProps {
  city: string;
  country: string;
  main: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  time: string;
  searchHistory?: ReactNode;
}

const WeatherToday: React.FC<WeatherTodayProps> = ({
  city,
  country,
  main,
  temp,
  tempMin,
  tempMax,
  humidity,
  time,
  searchHistory,
}) => {
  return (
    <div className="relative w-full rounded-2xl bg-[#1A1A1A80] p-8 mt-8 mb-8 shadow-lg backdrop-blur-md overflow-hidden min-h-[340px] flex flex-col">
      {/* Sun Image */}
      <img
        src="/sun.png"
        alt="Sun"
        className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl z-10"
        style={{ filter: "drop-shadow(0 0 40px #FFD70088)" }}
      />
      {/* Weather Info */}
      <div className="z-20 mt-2">
        {/* Mobile: two columns */}
        <div className="flex flex-row justify-between items-start gap-4 md:hidden">
          {/* Left: Title, Temp, H/L, City */}
          <div className="flex flex-col items-start min-w-[120px]">
            <span className="text-white text-lg font-semibold mb-2">
              Today's Weather
            </span>
            <span className="text-7xl font-extrabold text-white leading-none">
              {Math.round(temp)}°
            </span>
            <span className="text-white/80 text-base font-medium mt-1 mb-1">
              H: {Math.round(tempMax)}° L: {Math.round(tempMin)}°
            </span>
            <span className="font-bold text-blue-300 text-lg mt-1">
              {city}
              {country ? `, ${country}` : ""}
            </span>
          </div>
          {/* Right: Main, Humidity, Time */}
          <div className="flex flex-col items-end text-right gap-1 min-w-[120px] mt-20 sm:mt-16">
            <span className="text-white text-lg font-semibold">{main}</span>
            <span className="text-white/80 text-base font-medium">
              Humidity: {humidity}%
            </span>
            <span className="text-white/80 text-base font-medium">{time}</span>
          </div>
        </div>
        {/* Desktop view (wip) */}
        <div className="hidden md:flex flex-col w-full">
          <span className="text-white text-lg font-semibold mb-2">
            Today's Weather
          </span>
          <span className="text-7xl font-extrabold text-white leading-none">
            {Math.round(temp)}°
          </span>
          <span className="text-white/80 text-base font-medium mt-1 mb-4">
            H: {Math.round(tempMax)}° L: {Math.round(tempMin)}°
          </span>
          <div className="text-white flex flex-row flex-wrap items-center gap-x-8 gap-y-2 w-full">
            <span className="font-bold text-blue-300 text-lg">
              {city}
              {country ? `, ${country}` : ""}
            </span>
            <span>{time}</span>
            <span>Humidity: {humidity}%</span>
            <span>{main}</span>
          </div>
        </div>
      </div>
      <div className="mt-8 z-20">{searchHistory}</div>
    </div>
  );
};

export default WeatherToday;

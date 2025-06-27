import React from "react";

import type { WeatherTodayProps } from "../helper/types";

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
    <div className="relative w-full rounded-2xl bg-[#1A1A1A80] p-5 mt-8 mb-8 shadow-lg backdrop-blur-md min-h-[340px] flex flex-col">
      {/* TODO: Replace this weather image based on weather*/}
      <img
        src="/sun.png"
        alt="Sun"
        className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 h-auto object-contain drop-shadow-2xl z-10"
      />
      {/* Weather Info */}
      <div className="z-20 mt-2">
        {/* Mobile View*/}
        <div className="md:hidden">
          <WeatherMainInfo
            temp={temp}
            tempMax={tempMax}
            tempMin={tempMin}
            city={city}
            country={country}
            main={main}
            humidity={humidity}
            time={time}
            isMobile={true}
          />
        </div>
        {/* Desktop View*/}
        <div className="hidden md:flex flex-col w-full">
          <WeatherMainInfo
            temp={temp}
            tempMax={tempMax}
            tempMin={tempMin}
            city={city}
            country={country}
            main={main}
            humidity={humidity}
            time={time}
            isMobile={false}
          />
        </div>
      </div>
      {searchHistory && <div className="mt-8 z-20">{searchHistory}</div>}
    </div>
  );
};

// Main weather info
function WeatherMainInfo({
  temp,
  tempMax,
  tempMin,
  city,
  country,
  main,
  humidity,
  time,
  isMobile,
}: {
  temp: number;
  tempMax: number;
  tempMin: number;
  city: string;
  country: string;
  main: string;
  humidity: number;
  time: string;
  isMobile: boolean;
}) {
  if (isMobile) {
    // Mobile ui layout: left = temp/city, right = weather/humidity/time
    return (
      <div className="flex justify-between gap-4">
        <div className="flex flex-col items-start min-w-[120px]">
          <span className="text-white text-lg font-semibold mb-2">
            Today's Weather
          </span>
          <span className="text-7xl font-extrabold text-white leading-none">
            {Math.round(temp)}°
          </span>
          <span className="text-white mt-1 mb-1">
            H: {Math.round(tempMax)}° L: {Math.round(tempMin)}°
          </span>
          <span className="font-bold text-white text-lg mt-1">
            {city}
            {country ? `, ${country}` : ""}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1 min-w-[120px] mt-23 sm:mt-16">
          <span className="text-white">{main}</span>
          <span className="text-white">Humidity: {humidity}%</span>
          <span className="text-white">{time}</span>
        </div>
      </div>
    );
  }
  // Desktop ui layout: a row of weather details
  return (
    <>
      <span className="text-white text-lg mb-2">Today's Weather</span>
      <span className="text-8xl font-bold text-white">{Math.round(temp)}°</span>
      <span className="text-white mt-1 mb-4">
        H: {Math.round(tempMax)}° L: {Math.round(tempMin)}°
      </span>
      <WeatherDetailsRow
        city={city}
        country={country}
        time={time}
        humidity={humidity}
        main={main}
      />
    </>
  );
}

// Weather details row (desktop only)
function WeatherDetailsRow({
  city,
  country,
  time,
  humidity,
  main,
}: {
  city: string;
  country: string;
  time: string;
  humidity: number;
  main: string;
}) {
  return (
    <div className="text-white flex flex-row items-center justify-between w-full">
      <span className="font-bold text-lg">
        {city}
        {country ? `, ${country}` : ""}
      </span>
      <span>{time}</span>
      <span>Humidity: {humidity}%</span>
      <span>{main}</span>
    </div>
  );
}

export default WeatherToday;

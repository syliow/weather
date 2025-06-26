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
  children?: ReactNode;
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
  children,
}) => {
  return (
    <div className="relative w-full rounded-2xl bg-[#1A1A1A80] p-8 mb-8 shadow-lg backdrop-blur-md overflow-hidden min-h-[500px] flex flex-col">
      {/* Sun Image */}
      <img
        src="/sun.png"
        alt="Sun"
        className="hidden md:block absolute top-0 right-0 w-48 h-48 object-contain drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 0 40px #FFD70088)' }}
      />
      {/* Weather Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 z-10">
        <div className="flex-1 flex flex-col justify-center gap-2 w-full md:w-auto">
          <div className="text-white text-lg font-semibold mb-2">Today's Weather</div>
          <div className="flex items-end gap-4">
            <span className="text-7xl font-extrabold text-white leading-none">{Math.round(temp)}°</span>
            <div className="flex flex-col text-white/80 text-base font-medium mb-2">
              <span>H: {Math.round(tempMax)}° L: {Math.round(tempMin)}°</span>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-x-8 gap-y-2 text-white/80 text-base font-medium mt-2 items-center">
            <span className="font-bold text-blue-300">{city}, {country}</span>
            <span>{time}</span>
            <span>Humidity: {humidity}%</span>
            <span className="ml-auto md:ml-0">{main}</span>
          </div>
        </div>
      </div>
      {/* Children (Search History) */}
      <div className="mt-8 z-10">{children}</div>
    </div>
  );
};

export default WeatherToday;

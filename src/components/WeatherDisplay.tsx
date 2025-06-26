import React from "react";

interface WeatherDisplayProps {
  city: string;
  country: string;
  main: string;
  description: string;
  tempMin: number;
  tempMax: number;
  humidity: number;
  time: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  city,
  country,
  main,
  description,
  tempMin,
  tempMax,
  humidity,
  time,
}) => {
  return (
    <div className="p-4 mb-4">
      <div className="text-gray-600 font-medium">{city}, {country}</div>
      <div className="text-4xl font-bold mt-2">{main}</div>
      <div className="mt-2 space-y-1">
        <div>
          <span className="font-semibold text-gray-700">Description:</span>
          <span className="ml-2">{description}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Temperature:</span>
          <span className="ml-2">{tempMin}℃ ~ {tempMax}℃</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Humidity:</span>
          <span className="ml-2">{humidity}%</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Time:</span>
          <span className="ml-2">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;

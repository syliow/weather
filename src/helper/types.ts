import type { ReactNode } from "react";

// Represents a single search history by user
export interface HistoryItem {
  city: string;
  country: string;
  time: string;
}

// Props for the main weather display card for displaying weather info (WeatherToday.tsx)
export interface WeatherTodayProps {
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

// Props for the search bar at the top (WeatherSearchBar.tsx)
export interface WeatherSearchBarProps {
  city: string;
  onCityChange: (value: string) => void;
  onSearch: () => void;
}

// Props for the weather history list search button
export interface SearchHistoryProps {
  history: HistoryItem[];
  onView: (index: number) => void;
  onDelete: (index: number) => void;
}

// Props for each individual search history rowbuttons (SearchHistory.tsx)
export interface SearchHistoryItemProps {
  item: HistoryItem;
  index: number;
  onView: (index: number) => void;
  onDelete: (index: number) => void;
}

//data returned from https://openweathermap.org/api
export interface WeatherData {
  name: string;
  sys: { country: string };
  weather: { main: string }[];
  main: { temp: number; temp_min: number; temp_max: number; humidity: number };
  dt: number;
}

export interface IconButtonProps {
  onClick: () => void;
  icon: string;
  alt: string;
}

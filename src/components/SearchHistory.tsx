import React from "react";
import SearchHistoryItem from "./SearchHistoryItem";

export interface HistoryItem {
  city: string;
  country: string;
  time: string;
}

interface SearchHistoryProps {
  history: HistoryItem[];
  onView: (index: number) => void;
  onDelete: (index: number) => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({
  history,
  onView,
  onDelete,
}) => {
  return (
    <div className="w-full mt-8 rounded-2xl bg-[#1A1A1A80] p-6 backdrop-blur-md shadow-lg">
      <div className="text-white text-lg font-semibold mb-4">
        Search History
      </div>
      <ol className="flex flex-col gap-4">
        {/* Component for SeperateHistoryItem */}
        {history.map((item, index) => (
          <SearchHistoryItem
            key={index}
            item={item}
            index={index}
            onView={onView}
            onDelete={onDelete}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchHistory;

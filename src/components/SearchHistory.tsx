import React from "react";

interface HistoryItem {
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
      <div className="text-white text-lg font-semibold mb-4">Search History</div>
      <ol className="flex flex-col gap-4">
        {history.map((item, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#1A1A1A80] rounded-2xl px-6 py-4 text-white shadow-md"
          >
            <div className="font-medium text-base mb-2 sm:mb-0">
              {item.city}{item.country ? `, ${item.country}` : ''}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-gray-300 text-sm whitespace-nowrap">{item.time}</span>
              <button
                className="px-4 py-1 rounded-xl bg-[#1A1A1A80] hover:bg-[#1A1A1Acc] text-white border border-white/10 transition-colors duration-200"
                onClick={() => onView(index)}
              >
                Search
              </button>
              <button
                className="px-4 py-1 rounded-xl bg-[#1A1A1A80] hover:bg-[#1A1A1Acc] text-white border border-white/10 transition-colors duration-200"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchHistory;

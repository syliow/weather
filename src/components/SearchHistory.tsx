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
      <div className="text-white text-lg font-semibold mb-4">
        Search History
      </div>
      <ol className="flex flex-col gap-4">
        {history.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-[#1A1A1A80] rounded-2xl px-6 py-4 text-white shadow-md gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="font-medium text-base">
                {item.city}
                {item.country ? `, ${item.country}` : ""}
              </div>
              <span className="text-gray-300 text-sm whitespace-nowrap">
                {item.time}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1A1A1A80] hover:bg-[#1A1A1Acc] text-white border border-[#FFFFFF66] transition-colors duration-200 cursor-pointer"
                onClick={() => onView(index)}
              >
                <img src="/search_white.svg" alt="Search" className="w-5 h-5" />
              </button>
              <button
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1A1A1A80] hover:bg-[#1A1A1Acc] text-white border border-[#FFFFFF66] transition-colors duration-200 cursor-pointer"
                onClick={() => onDelete(index)}
              >
                <img src="/delete_white.svg" alt="Delete" className="w-5 h-5" />
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchHistory;

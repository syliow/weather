import React from "react";

interface HistoryItem {
  city: string;
  country: string;
  time: string;
}


const SearchHistory: React.FC<> = ({
  history,
  onView,
  onDelete,
}) => (
  <div className="p-4">
    <div className="text-lg font-semibold mb-2">Search History</div>
    <ol className="space-y-2">
      {history.map((item, idx) => (
        <li key={idx} className="flex items-center justify-between pb-1">
          <div>
            <span className="font-medium">
              {idx + 1}. {item.city}, {item.country}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">{item.time}</span>
            <button
              className="hover:text-blue-600"
              onClick={() => onView(idx)}
              title="View"
            >
              Search
            </button>
            <button
              className="hover:text-red-600"
              onClick={() => onDelete(idx)}
              title="Delete"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default SearchHistory;

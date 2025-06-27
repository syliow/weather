import type { HistoryItem } from "./SearchHistory";

const SearchHistoryItem: React.FC<{
  item: HistoryItem;
  index: number;
  onView: (index: number) => void;
  onDelete: (index: number) => void;
}> = ({ item, index, onView, onDelete }) => (
  <li className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#1A1A1A80] rounded-2xl px-6 py-4 text-white shadow-md gap-2 sm:gap-4">
    <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-4 flex-1">
      <div className="capitalize font-medium text-base flex flex-row items-center gap-2">
        {item.city}
        {item.country ? `, ${item.country}` : ""}
        <span className="flex sm:hidden ml-auto gap-2">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1A1A1A80]  text-white border border-[#FFFFFF66]  cursor-pointer"
            onClick={() => onView(index)}
          >
            <img src="/search_white.svg" alt="Search" className="w-5 h-5" />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1A1A1A80] text-white border border-[#FFFFFF66]  cursor-pointer"
            onClick={() => onDelete(index)}
          >
            <img src="/delete_white.svg" alt="Delete" className="w-5 h-5" />
          </button>
        </span>
      </div>
      <span className="text-white/50 text-sm">
        {item.time}
      </span>
    </div>
    <div className="hidden sm:flex items-center gap-2">
      <button
        className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1A1A1A80]  text-white border border-[#FFFFFF66]  cursor-pointer"
        onClick={() => onView(index)}
      >
        <img src="/search_white.svg" alt="Search" className="w-5 h-5" />
      </button>
      <button
        className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1A1A1A80]  text-white border border-[#FFFFFF66]  cursor-pointer"
        onClick={() => onDelete(index)}
      >
        <img src="/delete_white.svg" alt="Delete" className="w-5 h-5" />
      </button>
    </div>
  </li>
);

export default SearchHistoryItem;

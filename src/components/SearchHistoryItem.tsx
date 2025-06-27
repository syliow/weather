import IconButton from "./IconButton";
import type { HistoryItem } from "./SearchHistory";

interface SearchHistoryItemProps {
  item: HistoryItem;
  index: number;
  onView: (index: number) => void;
  onDelete: (index: number) => void;
}

const SearchHistoryItem: React.FC<SearchHistoryItemProps> = ({
  item,
  index,
  onView,
  onDelete,
}) => (
  <li className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#1A1A1A80] rounded-2xl px-6 py-4 text-white shadow-md gap-2 sm:gap-4">
    <div className="flex flex-col sm:flex-row sm:items-center flex-1 gap-0 sm:gap-4">
      {/* City and Country */}
      <div className="capitalize font-medium text-base flex flex-row items-center gap-2">
        {item.city}
        {item.country ? `, ${item.country}` : ""}
        {/* Mobile: Icon buttons inline */}
        <span className="flex sm:hidden ml-auto gap-2">
          <IconButton
            onClick={() => onView(index)}
            icon="/search_white.svg"
            alt="Search"
          />
          <IconButton
            onClick={() => onDelete(index)}
            icon="/delete_white.svg"
            alt="Delete"
          />
        </span>
      </div>
      {/* Mobile: Date & Time is below city/country (The main difference) */}
      <span className="text-white/50 text-sm">{item.time}</span>
    </div>
    {/* Desktop: Icon buttons at end of row */}
    <div className="hidden sm:flex items-center gap-2">
      <IconButton
        onClick={() => onView(index)}
        icon="/search_white.svg"
        alt="Search"
      />
      <IconButton
        onClick={() => onDelete(index)}
        icon="/delete_white.svg"
        alt="Delete"
      />
    </div>
  </li>
);

export default SearchHistoryItem;

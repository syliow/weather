import SearchHistoryItem from "./SearchHistoryItem";
import type { SearchHistoryProps } from "../helper/types";

function SearchHistory({ history, onView, onDelete }: SearchHistoryProps) {
  return (
    //Note: the rgba color is directly obtained from figma
    <div className="w-full mt-8 rounded-2xl bg-[rgba(26, 26, 26, 0.3)] p-4 backdrop-blur-md shadow-lg">
      <div className="text-white mb-4">Search History</div>
      <ol className="flex flex-col gap-4">
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
}

export default SearchHistory;

import { CiBarcode } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

export default function ProductSearch() {
  const [searchParam, setSearchParam] = useSearchParams();

  function debounce(
    callback: (e: React.ChangeEvent<HTMLInputElement>) => void,
    delay: number,
  ) {
    let timeoutID: NodeJS.Timeout;

    return function (e: React.ChangeEvent<HTMLInputElement>) {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        // Call the original callback, passing the debounced event
        callback(e);
      }, delay);
    };
  }

  const handleSearchChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // Do something with the debounced search input
      if (!e.target.value) {
        searchParam.delete("search");
      } else {
        searchParam.set("search", e.target.value);
      }
      setSearchParam(searchParam);
    },
    500,
  );

  return (
    <div className="flex w-full items-center gap-2 px-2 py-3 shadow-md">
      <HiMagnifyingGlass className="h-6 w-6" />
      <input
        type="text"
        placeholder="search products"
        className="h-full w-full border-none bg-transparent text-sm outline-none placeholder:text-gray-300"
        onChange={handleSearchChange}
      />
      <CiBarcode className="h-6 w-6" />
    </div>
  );
}

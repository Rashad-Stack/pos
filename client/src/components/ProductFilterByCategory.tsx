import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GET_ALL_CATEGORIES } from "@/graphql/query";
import { Category } from "@/types";
import { useQuery } from "@apollo/client";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import AllCategories from "./AllCategories";

export default function ProductFilterByCategory() {
  const [searchParam, setSearchParam] = useSearchParams();
  const active = searchParam.get("category");

  const { data, loading, error } = useQuery(GET_ALL_CATEGORIES);

  const { categories } = data?.getAllCategory || { categories: [] };

  const handleCategoryClick = (category: string) => {
    if (category === "all") {
      searchParam.delete("category");
    } else {
      searchParam.set("category", category);
    }
    setSearchParam(searchParam);
  };

  return (
    <div className="flex items-center justify-between gap-3 p-3">
      <div className="flex max-h-10 flex-wrap items-center gap-3 overflow-hidden">
        <Button
          variant="outline"
          className={!active ? "border-indigo-300 text-indigo-300" : ""}
          onClick={() => handleCategoryClick("all")}
        >
          All category
        </Button>

        {!loading &&
          !error &&
          categories.map((category: Category) => (
            <Button
              key={category._id}
              variant="outline"
              className={
                active === category._id
                  ? "border-indigo-300 text-indigo-300"
                  : ""
              }
              onClick={() => handleCategoryClick(category._id)}
            >
              {category.name}
            </Button>
          ))}
      </div>

      <Sheet>
        <SheetTrigger>
          <HiEllipsisVertical className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <AllCategories />
        </SheetContent>
      </Sheet>
    </div>
  );
}

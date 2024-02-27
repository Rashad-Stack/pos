import { GET_ALL_CATEGORIES } from "@/graphql/query";
import { Category } from "@/types";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";

export default function AllCategories() {
  const [searchParam, setSearchParam] = useSearchParams();
  const active = searchParam.get("category");

  const { data, loading, error } = useQuery(GET_ALL_CATEGORIES, {
    variables: { limit: 50 },
  });

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
    <div className="flex flex-wrap items-center gap-3">
      {!loading &&
        !error &&
        categories.map((category: Category) => (
          <Button
            key={category._id}
            variant="outline"
            className={
              active === category._id
                ? "w-fit border-indigo-300 text-indigo-300"
                : "w-fit"
            }
            onClick={() => handleCategoryClick(category._id)}
          >
            {category.name}
          </Button>
        ))}
    </div>
  );
}

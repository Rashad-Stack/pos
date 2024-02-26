import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

export default function ProductFilterByCategory() {
  const [searchParam, setSearchParam] = useSearchParams();
  const category = searchParam.get("category");

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
          className={!category ? "border-indigo-300 text-indigo-300" : ""}
          onClick={() => handleCategoryClick("all")}
        >
          All category
        </Button>
        <Button
          variant="outline"
          className={
            category === "Electronics"
              ? "border-indigo-300 text-indigo-300"
              : ""
          }
          onClick={() => handleCategoryClick("Electronics")}
        >
          Electronics
        </Button>
      </div>

      <Sheet>
        <SheetTrigger>
          <HiEllipsisVertical className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="outline">All category</Button>
              <Button variant="outline">Electronics</Button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

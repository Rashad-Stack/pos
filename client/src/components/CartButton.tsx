import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function CartButton() {
  return (
    <Sheet>
      <SheetTrigger className="absolute bottom-4 right-4 rounded-full bg-indigo-300 p-5 lg:hidden">
        <HiOutlineShoppingCart className="h-8 w-8 text-white" />
        <span className="absolute left-0 top-0 grid h-8 w-8 -translate-x-0 -translate-y-0 transform place-items-center rounded-full bg-red-500 text-white">
          6
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

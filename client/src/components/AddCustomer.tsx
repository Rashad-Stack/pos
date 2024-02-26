import { HiOutlinePlus, HiOutlineUser } from "react-icons/hi2";
import { Button } from "./ui/button";

export default function AddCustomer() {
  return (
    <Button
      variant="secondary"
      className="flex w-full items-center justify-between gap-2 bg-indigo-200 text-base text-indigo-700"
    >
      <span className="flex items-center gap-3">
        <HiOutlineUser className="h-4 w-4" />
        <span> Steeve Jobs</span>
      </span>

      <HiOutlinePlus className="h-4 w-4" />
    </Button>
  );
}

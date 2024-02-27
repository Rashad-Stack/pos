import { DISCOUNT, SHIPPING, TAX } from "@/constant";
import { CiDiscount1 } from "react-icons/ci";
import { HiOutlineXMark } from "react-icons/hi2";
import { PiHandFistLight } from "react-icons/pi";
import { RiHandCoinLine } from "react-icons/ri";
import AppButton from "./AppButton";
import { Button } from "./ui/button";

type Props = {
  subtotal: number;
  total: number;
};

export default function CheckoutButton({ subtotal, total }: Props) {
  const tax = subtotal * TAX;
  const shipping = SHIPPING;
  const discount = DISCOUNT;
  const netTotal = subtotal + tax + shipping - discount;

  return (
    <div className="mt-5">
      <div className="flex justify-between rounded-sm bg-indigo-100 p-3 py-2 text-lg font-bold text-indigo-600">
        <p className="flex items-center gap-2">Product count ({total})</p>
        <p className="flex items-center gap-2">Total ${netTotal.toFixed(2)}</p>
      </div>
      <div className="mt-4 flex flex-col gap-4 xl:flex-row">
        <Button
          variant="secondary"
          className="flex w-full items-center justify-center gap-2 rounded-sm bg-red-200 text-lg text-red-600"
        >
          <HiOutlineXMark className="h-4 w-4" /> <span>Cancel</span>
        </Button>
        <AppButton>
          <PiHandFistLight className="h-4 w-4" /> <span>Hold</span>
        </AppButton>

        <AppButton>
          <CiDiscount1 className="h-4 w-4" /> <span>Discount</span>
        </AppButton>
        <AppButton>
          <RiHandCoinLine className="h-4 w-4" /> <span> Pay now</span>
        </AppButton>
      </div>
    </div>
  );
}

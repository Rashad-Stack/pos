import { HiOutlineNoSymbol, HiOutlinePlus } from "react-icons/hi2";
import { LiaShippingFastSolid } from "react-icons/lia";
import { SlNote } from "react-icons/sl";
import AppButton from "./AppButton";

export default function CartHeaderButtons() {
  return (
    <div className="flex flex-col gap-4 xl:flex-row">
      <AppButton>
        <SlNote className="h-4 w-4" />
        Note
      </AppButton>
      <AppButton>
        <LiaShippingFastSolid className="h-4 w-4" />
        <span> Shipping</span>
      </AppButton>
      <AppButton>
        <HiOutlineNoSymbol className="h-4 w-4" />
        <span>Hold Order</span>
      </AppButton>
      <AppButton>
        <HiOutlinePlus className="h-4 w-4" />
        <span> New Item</span>
      </AppButton>
    </div>
  );
}

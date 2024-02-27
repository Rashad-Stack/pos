import { Cart } from "@/types";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import DecreaseQuantity from "./DecreaseQuantity";
import DeleteCart from "./DeleteCart";
import IncreaseQuantity from "./IncreaseQuantity";

type Props = {
  cart: Cart;
};

export default function CartCard({ cart }: Props) {
  const { product, quantity, totalPrice, _id } = cart || {};

  return (
    <div className="flex items-center gap-2">
      <HiOutlinePencilSquare className="h-6 w-6" />
      <div className="flex w-full flex-wrap justify-between gap-3 border border-gray-300 p-2 ">
        <div className="flex items-center gap-3">
          <h1 className="line-clamp-1 text-sm font-bold">{product?.name}</h1>
          <p className="text-xs"> ${product?.price}</p>
        </div>
        <div className="flex items-center gap-3 font-bold">
          <div className="flex gap-2">
            <DecreaseQuantity _id={_id} />
            <span>{quantity}</span>
            <IncreaseQuantity _id={_id} />
          </div>
          <p className="text-xs">Total: ${totalPrice}</p>
        </div>
      </div>
      <DeleteCart id={_id} />
    </div>
  );
}

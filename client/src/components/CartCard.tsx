import { Cart } from "@/types";
import {
  HiOutlineMinus,
  HiOutlinePencilSquare,
  HiOutlinePlus,
  HiOutlineTrash,
} from "react-icons/hi2";

type Props = {
  cart: Cart;
};

export default function CartCard({ cart }: Props) {
  const { product, quantity, totalPrice } = cart || {};

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
            <button>
              <HiOutlineMinus className="h-4 w-4" />
            </button>
            <span>{quantity}</span>
            <button>
              <HiOutlinePlus className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs">Total: ${totalPrice}</p>
        </div>
      </div>
      <HiOutlineTrash className="h-6 w-6 text-red-500" />
    </div>
  );
}

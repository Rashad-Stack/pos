import { REMOVE_FROM_CART } from "@/graphql/mutation";
import { ALL_CARTS } from "@/graphql/query";
import { Cart } from "@/types";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import DecreaseQuantity from "./DecreaseQuantity";
import IncreaseQuantity from "./IncreaseQuantity";

type Props = {
  cart: Cart;
};

export default function CartCard({ cart }: Props) {
  const { product, quantity, totalPrice, _id } = cart || {};

  const [remove, { loading }] = useMutation(REMOVE_FROM_CART);

  const spinner = (
    <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-indigo-600" />
  );

  function handleRemoveFromCart() {
    toast.promise(
      remove({
        variables: {
          productId: _id,
        },
        refetchQueries: [{ query: ALL_CARTS }],
      }),
      {
        loading: `Removing ${product?.name} from cart`,
        success: `${product?.name} removed from cart`,
        error: `Error removing ${product?.name} from cart`,
      },
    );
  }

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
      <button onClick={handleRemoveFromCart} disabled={loading}>
        {loading ? (
          spinner
        ) : (
          <HiOutlineTrash className="h-6 w-6 text-red-400" />
        )}
      </button>
    </div>
  );
}

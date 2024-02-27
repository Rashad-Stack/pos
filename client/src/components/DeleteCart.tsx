import { REMOVE_FROM_CART } from "@/graphql/mutation";
import { GET_ALL_CARTS } from "@/graphql/query";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { HiOutlineTrash } from "react-icons/hi2";

type Props = {
  id: string;
};

export default function DeleteCart({ id }: Props) {
  const [remove, { loading }] = useMutation(REMOVE_FROM_CART);

  const spinner = (
    <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-indigo-600" />
  );

  function handleRemoveFromCart() {
    toast.promise(
      remove({
        variables: {
          productId: id,
        },
        refetchQueries: [{ query: GET_ALL_CARTS }],
      }),
      {
        loading: `Removing from cart`,
        success: `Removed from cart`,
        error: `Error removing from cart`,
      },
    );
  }

  return (
    <button onClick={handleRemoveFromCart} disabled={loading}>
      {loading ? spinner : <HiOutlineTrash className="h-6 w-6 text-red-400" />}
    </button>
  );
}

import { DECREASE_QUANTITY } from "@/graphql/mutation";
import { ALL_CARTS } from "@/graphql/query";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { HiOutlineMinus } from "react-icons/hi2";

type Props = {
  _id: string;
};

export default function DecreaseQuantity({ _id }: Props) {
  const [decreaseQuantity, { loading }] = useMutation(DECREASE_QUANTITY);

  const handleDecreaseQuantity = () => {
    toast.promise(
      decreaseQuantity({
        variables: {
          productId: _id,
        },
        refetchQueries: [{ query: ALL_CARTS }],
      }),
      {
        loading: `Decreasing quantity`,
        success: `Decreased quantity`,
        error: `Error decreasing quantity`,
      },
    );
  };

  const spinner = (
    <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-indigo-600" />
  );

  return (
    <button onClick={handleDecreaseQuantity} disabled={loading}>
      {loading ? spinner : <HiOutlineMinus className="h-4 w-4" />}
    </button>
  );
}

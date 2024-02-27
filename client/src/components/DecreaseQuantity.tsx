import { DECREASE_QUANTITY } from "@/graphql/mutation";
import { GET_ALL_CARTS } from "@/graphql/query";
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
        refetchQueries: [{ query: GET_ALL_CARTS }],
      }),
      {
        loading: `Decreasing quantity`,
        success: `Decreased quantity`,
        error: `Error decreasing quantity`,
      },
    );
  };

  return (
    <button onClick={handleDecreaseQuantity} disabled={loading}>
      <HiOutlineMinus className="h-4 w-4" />
    </button>
  );
}

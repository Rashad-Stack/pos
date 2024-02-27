import { INCREASE_QUANTITY } from "@/graphql/mutation";
import { GET_ALL_CARTS } from "@/graphql/query";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { HiOutlinePlus } from "react-icons/hi2";

type Props = {
  _id: string;
};

export default function IncreaseQuantity({ _id }: Props) {
  const [increaseQuantity, { loading }] = useMutation(INCREASE_QUANTITY);

  const handleIncreaseQuantity = () => {
    toast.promise(
      increaseQuantity({
        variables: {
          productId: _id,
        },
        refetchQueries: [{ query: GET_ALL_CARTS }],
      }),
      {
        loading: `Increasing quantity`,
        success: `Increased quantity`,
        error: `Error increasing quantity`,
      },
    );
  };

  return (
    <button onClick={handleIncreaseQuantity} disabled={loading}>
      <HiOutlinePlus className="h-4 w-4" />
    </button>
  );
}

import { INCREASE_QUANTITY } from "@/graphql/mutation";
import { ALL_CARTS } from "@/graphql/query";
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
        refetchQueries: [{ query: ALL_CARTS }],
      }),
      {
        loading: `Increasing quantity`,
        success: `Increased quantity`,
        error: `Error increasing quantity`,
      },
    );
  };

  const spinner = (
    <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-indigo-600" />
  );

  return (
    <button onClick={handleIncreaseQuantity} disabled={loading}>
      {loading ? spinner : <HiOutlinePlus className="h-4 w-4" />}
    </button>
  );
}

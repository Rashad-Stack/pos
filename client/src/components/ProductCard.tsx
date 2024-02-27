import { ADD_TO_CART } from "@/graphql/mutation";
import { GET_ALL_CARTS } from "@/graphql/query";
import { Product } from "@/types";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { name, price, image } = product;
  const [addToCart] = useMutation(ADD_TO_CART);

  function handleAddToCart() {
    toast.promise(
      addToCart({
        variables: { productId: product._id },
        refetchQueries: [{ query: GET_ALL_CARTS }],
      }),
      {
        loading: "Adding to cart...",
        success: () => `${name} added to cart!`,
        error: (err) => err.message,
      },
      {
        style: {
          minWidth: "250px",
        },
      },
    );
  }

  return (
    <button onClick={handleAddToCart}>
      <div className="overflow-hidden rounded shadow-lg">
        <img className="w-full" src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">${price}</div>
          <p className="line-clamp-2 text-sm font-medium text-gray-700">
            {name}
          </p>
        </div>
      </div>
    </button>
  );
}

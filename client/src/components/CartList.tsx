import { GET_CART } from "@/graphql/query";
import { Cart } from "@/types";
import { useQuery } from "@apollo/client";
import CartCard from "./CartCard";
import Checkout from "./Checkout";
import CheckoutButton from "./CheckoutButton";

export default function CartList() {
  const { data, loading, error } = useQuery(GET_CART, {
    variables: { limit: 10, page: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) throw new Error(error.message);

  const { carts } = data.allCarts || {};

  return (
    <div className="space-y-4 p-4">
      {carts.length === 0 && (
        <div className="flex h-64 items-center justify-center">
          <p className="text-2xl">Cart is empty</p>
        </div>
      )}

      {carts.length > 0 &&
        carts.map((cart: Cart) => <CartCard key={cart._id} cart={cart} />)}

      <div className="flex justify-end">
        <Checkout />
      </div>

      <CheckoutButton />
    </div>
  );
}

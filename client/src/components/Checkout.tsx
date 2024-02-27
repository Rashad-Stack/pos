import { DISCOUNT, SHIPPING, TAX } from "@/constant";
import { ALL_CARTS } from "@/graphql/query";
import { useQuery } from "@apollo/client";

export default function Checkout() {
  const { data, loading } = useQuery(ALL_CARTS, {
    variables: { limit: 10, page: 1 },
  });

  const { subtotal } = data.allCarts || {};

  const tax = subtotal * TAX;
  const shipping = SHIPPING;
  const discount = DISCOUNT;

  const spinner = (
    <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-indigo-600" />
  );

  return (
    <div className="mt-5 flex flex-col justify-between max-sm:max-w-md lg:max-w-sm">
      <div>
        <div className="flex justify-between border-y-2 border-gray-300 py-2">
          <p>Subtotal</p>
          <p className="font-semibold">
            ${loading ? spinner : subtotal?.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between py-2">
          <p>TAX</p>
          <p className="font-semibold">${loading ? spinner : tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between border-y-2 border-gray-300 py-2">
          <p>Shipping</p>
          <p className="font-semibold">
            ${loading ? spinner : shipping.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between gap-3 py-2">
          <p className="text-indigo-400">Discount on cart</p>
          <p className="font-semibold">
            ${loading ? spinner : discount.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

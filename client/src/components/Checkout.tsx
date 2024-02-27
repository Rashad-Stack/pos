import { DISCOUNT, SHIPPING, TAX } from "@/constant";

type Props = {
  subtotal: number;
};

export default function Checkout({ subtotal }: Props) {
  const tax = subtotal * TAX;
  const shipping = SHIPPING;
  const discount = DISCOUNT;

  return (
    <div className="mt-5 flex flex-col justify-between max-sm:max-w-md lg:max-w-sm">
      <div>
        <div className="flex justify-between border-y-2 border-gray-300 py-2">
          <p>Subtotal</p>
          <p className="font-semibold">${subtotal?.toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-2">
          <p>TAX</p>
          <p className="font-semibold">${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between border-y-2 border-gray-300 py-2">
          <p>Shipping</p>
          <p className="font-semibold">${shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between gap-3 py-2">
          <p className="text-indigo-400">Discount on cart</p>
          <p className="font-semibold">${discount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

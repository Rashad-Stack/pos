import CheckoutButton from "./CheckoutButton";

export default function Checkout() {
  return (
    <div className="mt-5 flex flex-col justify-between max-sm:max-w-md lg:max-w-sm">
      <div>
        <div className="flex justify-between border-y-2 border-gray-300 py-2">
          <p>Subtotal</p>
          <p>$200</p>
        </div>
        <div className="flex justify-between py-2">
          <p>TAX</p>
          <p>$25.50</p>
        </div>
        <div className="flex justify-between border-y-2 border-gray-300 py-2">
          <p>Shipping</p>
          <p>$5.50</p>
        </div>
        <div className="flex justify-between py-2">
          <p className="text-indigo-400">Discount on cart</p>
          <p>$10.00</p>
        </div>
      </div>
      <CheckoutButton />
    </div>
  );
}

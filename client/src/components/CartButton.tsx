import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GET_ALL_CARTS } from "@/graphql/query";
import { Cart } from "@/types";
import { useQuery } from "@apollo/client";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import AddCustomer from "./AddCustomer";
import CartCard from "./CartCard";
import CartHeaderButtons from "./CartHeaderButtons";
import Checkout from "./Checkout";
import CheckoutButton from "./CheckoutButton";

export default function CartButton() {
  const { data } = useQuery(GET_ALL_CARTS, {
    variables: { limit: 50 },
  });

  const { carts, subtotal, total } = data?.allCarts || {};

  return (
    <Sheet>
      <SheetTrigger className="fixed bottom-4 right-4 rounded-full bg-indigo-300 p-5 lg:hidden">
        <HiOutlineShoppingCart className="h-8 w-8 text-white" />
        <span className="absolute left-0 top-0 grid h-8 w-8 -translate-x-0 -translate-y-0 transform place-items-center rounded-full bg-red-500 text-white">
          {total}
        </span>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto lg:hidden">
        <SheetHeader>
          <CartHeaderButtons />
          <AddCustomer />
        </SheetHeader>
        <div className="my-10 space-y-4">
          {carts?.length > 0 &&
            carts.map((cart: Cart) => <CartCard key={cart._id} cart={cart} />)}
        </div>
        <Checkout subtotal={subtotal} />
        <CheckoutButton subtotal={subtotal} total={total} />
      </SheetContent>
    </Sheet>
  );
}

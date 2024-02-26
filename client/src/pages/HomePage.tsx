import AddCustomer from "@/components/AddCustomer";
import CartButton from "@/components/CartButton";
import CartCard from "@/components/CartCard";
import CartHeaderButtons from "@/components/CartHeaderButtons";
import Checkout from "@/components/Checkout";
import CheckoutButton from "@/components/CheckoutButton";
import ProductCard from "@/components/ProductCard";
import ProductFilterByCategory from "@/components/ProductFilterByCategory";
import ProductSearch from "@/components/ProductSearch";

export default function HomePage() {
  return (
    <section>
      <div className="container mx-auto max-w-max px-0">
        <div className="grid lg:grid-cols-5">
          <div className="col-span-2 max-lg:hidden">
            <div className="space-y-4 bg-white p-4">
              <CartHeaderButtons />
              <AddCustomer />
            </div>
            <div className="space-y-4 p-4">
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />

              <div className="flex justify-end">
                <Checkout />
              </div>
              <CheckoutButton />
            </div>
          </div>
          <div className="col-span-3">
            <div className="sticky top-0 bg-white">
              <ProductSearch />
              <ProductFilterByCategory />
            </div>
            <div className="grid grid-cols-2 gap-4 px-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-5">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
      <CartButton />
    </section>
  );
}

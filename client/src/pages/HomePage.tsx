import AddCustomer from "@/components/AddCustomer";
import CartButton from "@/components/CartButton";
import CartHeaderButtons from "@/components/CartHeaderButtons";
import ProductCard from "@/components/ProductCard";
import ProductFilterByCategory from "@/components/ProductFilterByCategory";
import ProductSearch from "@/components/ProductSearch";

export default function HomePage() {
  return (
    <section>
      <div className="container mx-auto max-w-max px-0">
        <div className="grid lg:grid-cols-5">
          <div className="col-span-2 max-lg:hidden">
            <div className="sticky top-0 space-y-4 p-4">
              <CartHeaderButtons />
              <AddCustomer />
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

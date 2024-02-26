import CartButton from "@/components/CartButton";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <section>
      <div className="container mx-auto max-w-max">
        <div className="grid lg:grid-cols-5">
          <div className="col-span-2 max-lg:hidden">
            <div className="sticky top-0">hello</div>
          </div>
          <div className="col-span-3">
            <div className="sticky top-0">hello</div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-5">
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

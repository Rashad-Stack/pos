import { GET_ALL_PRODUCTS } from "@/graphql/query";
import { Product } from "@/types";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const [searchParam] = useSearchParams();
  const search = searchParam.get("search");
  const category = searchParam.get("category");

  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS, {
    variables: { limit: 10, page: 1, search, filter: category },
  });

  const { allProducts } = data || {};

  if (loading)
    return (
      <div className="flex h-1/2 items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-8 border-dashed border-indigo-400" />
      </div>
    );
  if (error) throw new Error(error?.message);

  return (
    <div className="grid grid-cols-2 gap-4 px-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-5">
      {allProducts?.products.map((product: Product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

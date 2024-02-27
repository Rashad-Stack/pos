import { Product } from "@/types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { name, price, image } = product;

  return (
    <div className="overflow-hidden rounded shadow-lg">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">${price}</div>
        <p className="line-clamp-2 text-sm font-medium text-gray-700">{name}</p>
      </div>
    </div>
  );
}

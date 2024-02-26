export default function ProductCard() {
  return (
    <div className="overflow-hidden rounded shadow-lg">
      <img
        className="w-full"
        src="/blue-shirt.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">$60</div>
        <p className="line-clamp-2 text-sm font-medium text-gray-700">
          Pure blue shirt
        </p>
      </div>
    </div>
  );
}

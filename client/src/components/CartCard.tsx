import {
  HiOutlineMinus,
  HiOutlinePencilSquare,
  HiOutlinePlus,
  HiOutlineTrash,
} from "react-icons/hi2";

export default function CartCard() {
  return (
    <div className="flex items-center gap-2">
      <HiOutlinePencilSquare className="h-6 w-6" />
      <div className="flex w-full flex-wrap justify-between gap-3 border border-gray-300 p-2 ">
        <div className="flex items-center gap-3">
          <h1 className="line-clamp-1 text-sm font-bold">Product Name</h1>
          <p className="text-xs"> $200</p>
        </div>
        <div className="flex items-center gap-3 font-bold">
          <div className="flex gap-2">
            <button>
              <HiOutlinePlus className="h-4 w-4" />
            </button>
            <span>4</span>
            <button>
              <HiOutlineMinus className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs">Total: $400</p>
        </div>
      </div>
      <HiOutlineTrash className="h-6 w-6 text-red-500" />
    </div>
  );
}

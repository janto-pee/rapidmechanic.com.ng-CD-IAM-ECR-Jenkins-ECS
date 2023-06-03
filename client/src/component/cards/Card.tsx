import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface ItemCardInterface {
  name: string;
  id: number;
  imageSrc: string;
  imageAlt: string;
  purpose: string;
}

interface CardInterface {
  item: ItemCardInterface;
}

export default function Card({ item }: CardInterface) {
  return (
    <div className="hover:relative bg-white border border-gray-200 rounded-sm shadow-md overflow-hidden  relative text-left hover:shadow-xl">
      <Link to={`/portfolio`} className="cursor-pointer">
        {/* image */}
        <img
          className="w-full h-72"
          height={500}
          width={500}
          src={item.imageSrc}
          alt={item.imageAlt}
        />

        {/* absolute */}
        <div className="flex items-center justify-between">
          <div className="px-2 py-[0.2rem] text-[14px] rounded-md bg-red-200 absolute top-[0.5rem] left-[0.5rem] text-red-700 z-10 flex items-center gap-2">
            <ChevronDownIcon className="text-red-500" />
            <span> Featured</span>
          </div>
          {/* <div className="px-4 py-[0.2rem] text-[14px] rounded-md bg-gray-800 absolute top-[0.5rem] right-[0.5rem] text-gray-200 z-10 flex gap-2 items-center">
            <EyeDropperIcon />
            <span>{item.name}</span>
          </div> */}
        </div>
      </Link>
    </div>
  );
}

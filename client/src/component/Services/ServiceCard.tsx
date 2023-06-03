import { Link } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";

export default function ServiceCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-md overflow-hidden  relative text-left hover:shadow-xl">
      <Link to={`/courses/`} className="cursor-pointer">
        <div className="text-center flex items-center flex-col p-8">
          {/* image */}
          <BsFillGearFill className="text-3xl" />

          {/* bottom white text */}
          <div className="bg-white p-4">
            <h5 className="pt-2 mb-4 text-lg font-[500]  tracking-tight text-gray-900 ">
              {"Light And Modern Apartment"}
            </h5>
            <p className="pt-2 mb-4 text-md  tracking-tight text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est nemo corrupti architecto 
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

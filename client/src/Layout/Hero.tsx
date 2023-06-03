import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="text-gray-100 px-4 w-[95%] sm:w-[90%] mx-auto">
      <div className="sm:py-12 lg:py-24 flex flex-col items-center text-center">
        <p className="mt-6 mb-4 text-sm lg md:text-lg">
          AUTOMOBILE GEARS AND ECU
        </p>
        <h1 className="text-4xl font-bold leading-none lg:text-[56px]">
          Programming
          <span className="text-yellow-400"> Your </span>Brain-box
        </h1>
        <div className="my-6 w-20 rounded-sm h-1 bg-gray-200"></div>
        <p className="sm:hidden mb-8 text-md text-gray-200 sm:mb-12  md:w-[68%] lg:w-[45%]">
          We solve tough problems such as automatic gear shifting, engine
          running, ...
        </p>
        <p className="hidden sm:block mb-8 text-md text-gray-200 sm:mb-12  md:w-[68%] lg:w-[45%]">
          We use our expertise to solve your vehicle problems such as cruise
          control, automatic gear shifting, engine running, ...
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <Link
            to="/contact"
            className="px-8 py-3 text-lg font-semibold rounded bg-yellow-500 text-gray-900 hover:bg-yellow-200"
          >
            Contact Us
          </Link>
          <Link
            to="/auth"
            className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:bg-gray-600"
          >
            Repair Works
          </Link>
        </div>
      </div>
    </div>
  );
}

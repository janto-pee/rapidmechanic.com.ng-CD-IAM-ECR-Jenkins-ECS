import {Link} from 'react-router-dom'
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaInternetExplorer } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Manual Transmission",
    imageSrc: "/img/car2.jpg",
    imageAlt: "manual transmission",
    purpose: "repair",
  },
  {
    id: 2,
    name: "Automatic Transmission",
    imageSrc: "/img/car1.jpg",
    imageAlt: "automatic transmission",
    purpose: "replacement",
  },
  {
    id: 3,
    name: "CV Transmission",
    imageSrc: "/img/car3.jpeg",
    imageAlt: "cv Transmission",
    purpose: "new",
  },
  {
    id: 4,
    name: "Semi-Automatic Transmission",
    imageSrc: "/img/car7.jpg",
    imageAlt: "semi-automatic Transmission",
    purpose: "repair",
  },
];

export default function PortfolioSection() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-4  pb-2 md:pt-20 sm:pb-4 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <p className={`text-md text-yellow-500 mb-2 `}>What we do</p>
        <h2
          className={`text-2xl md:text-2xl lg:text-3xl tracking-tight text-gray-900 font-semibold`}
        >
          PREMIUM PROJECTS
        </h2>
      </div>
      <div className="mx-auto max-w-2xl px-4  pb-4 md:pt-8 sm:pb-12 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 pt-8 w-full ">
        {products.slice(0,4).map((item) => (
            <div key={item.id}>
              <Link to={'/'} className=' border-2 border-gray-400 hover:bg-gray-200 flex '>
              <img

                src={item.imageSrc}
                alt=""
                className="delay-300 "
              />
              </Link>
              <div className="flex gap-2 mt-2 items-center justify-center md:justify-start text-center md:text-left">
                <Link to={'/contact'} className=" md:flex items-center gap-2 bg-yellow-500 px-3 py-2">
                  {" "}
                  <FaInternetExplorer /> Contact Us
                </Link>
                <Link
                  className=" md:flex items-center gap-2 border-gray border-2 bg-white text-purple-900 px-3 py-2"
                  to={'/auth'}
                >
                  {" "}
                  <AiFillGithub color="purple" /> Request Info
                </Link>
              </div>
            </div>
        )
        )}
      </div>
      </div>
    </div>
  );
}




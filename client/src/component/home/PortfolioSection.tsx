import { Card } from "..";

const products = [
  {
    id: 1,
    name: "BMW",
    imageSrc: "/img/car7.jpg",
    imageAlt: "manual transmission",
    purpose: "repair",
  },
  {
    id: 2,
    name: "Toyota",
    imageSrc: "/img/car8.jpg",
    imageAlt: "automatic transmission",
    purpose: "replacement",
  },
  {
    id: 3,
    name: "Hyundai",
    imageSrc: "/img/car10.jpg",
    imageAlt: "cv Transmission",
    purpose: "new",
  },
  {
    id: 4,
    name: "Range Rover",
    imageSrc: "/img/car9.jpeg",
    imageAlt: "semi-automatic Transmission",
    purpose: "repair",
  },
  {
    id: 5,
    name: "Toyota",
    imageSrc: "/img/car6.jpeg",
    imageAlt: "semi-automatic Transmission",
    purpose: "repair",
  },
  {
    id: 6,
    name: "Lexus",
    imageSrc: "/img/lexus.jpg",
    imageAlt: "semi-automatic Transmission",
    purpose: "repair",
  },
  {
    id: 7,
    name: "Kia",
    imageSrc: "/img/kia.jpg",
    imageAlt: "semi-automatic Transmission",
    purpose: "repair",
  },
  {
    id: 8,
    name: "Audi",
    imageSrc: "/img/audi.jpg",
    imageAlt: "semi-automatic Transmission",
    purpose: "repair",
  },
];

export default function PortfolioSection( ) {
  return (
    <div className="bg-[#025464] text-gray-100">
      <div className="mx-auto max-w-2xl px-4 md:pt-20 py-12 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <p className={`text-md text-yellow-500 mb-2`}>
          What we do
        </p>
        <h2 className={`text-2xl md:text-2xl lg:text-3xl tracking-tight text-gray-100 font-semibold `}>
          AWESOME PORTFOLIO
        </h2>

        <div className="mt-8 lg:mt-12 grid grid-cols-1 gap-x-6 gap-y-10 pb-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((item) => (
            <Card
            key={item.id}
            item ={item}
          />
          ))}
        </div>
        
      </div>
    </div>
  );
}

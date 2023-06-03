import ItemGridCard from "../cards/ItemGridCard";
const products = [
  {
    id: 1,
    name: "Manual Transmission",
    imageSrc: "/img/car5.jpeg",
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
    imageSrc: "/img/car4.jpeg",
    imageAlt: "cv Transmission",
    purpose: "new",
  },
  {
    id: 4,
    name: "Semi-Automatic",
    imageSrc: "/img/page-hero.jpg",
    imageAlt: "semi-automatic Transmission",
    purpose: "repair",
  },
];

export default function ServiceGrid() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 md:pt-20 py-12 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <p className={`text-md text-yellow-500 mb-2`}>What we do</p>
        <h2
          className={`text-2xl md:text-2xl lg:text-3xl tracking-tight text-gray-900 font-semibold`}
        >
          INNOVATIVE SERVICES
        </h2>

        <div className="mt-8 lg:mt-12 grid grid-cols-1 gap-x-6 gap-y-10 pb-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ItemGridCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

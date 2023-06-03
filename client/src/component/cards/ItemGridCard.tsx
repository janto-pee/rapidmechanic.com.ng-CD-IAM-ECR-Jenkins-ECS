import { AiOutlinePlus } from "react-icons/ai"
import { Link } from "react-router-dom";

interface Product {
  id: number,
  name: string,
  imageSrc: string,
  imageAlt: string,
  purpose: string,
}

interface ItemGridCardInterface {
  product: Product;
}

export default function ItemGridCard({
  product
}: ItemGridCardInterface) {

  return (
    <div className="group relative ">
      <Link to={'/service'}>
      <div
        className={`min-h-32 h-56 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75`}
      >
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className={`w-full object-cover object-center lg:h-56 lg:w-full`}
        />
      </div>
      <div className="service-icon flex flex-col items-center justify-center px-2 bg-[#025464] border-t-2 border-yellow-500 py-4 ">
        <AiOutlinePlus className="text-4xl text-white hidden serviceicon" />
        <p className="text-sm font-medium text-gray-100 text-xl">{product.name}</p>
        <p className="text-sm font-medium text-gray-300">{product.purpose}</p>
      </div>
      </Link>
      
    </div>
  );
}

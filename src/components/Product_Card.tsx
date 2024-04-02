import React from "react";
import { ProductList } from "../interfaces/product_lits";
import { FaStar } from "react-icons/fa";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/addToCart_reducer";

export default function ProductCard(props: ProductList): React.JSX.Element {
   const dispatch = useAppDispatch();

   const addToCartButton = (): void => {
      dispatch(
         addToCart({
            category: props.category,
            description: props.description,
            id: props.id,
            image: props.image,
            price: props.price,
            rating: { count: props.rating.count, rate: props.rating.rate },
            title: props.title,
         })
      );
   };

   return (
      <div className="bg-white px-3 pt-6 pb-3 space-y-5 relative flex flex-col">
         <div className="flex justify-center items-center">
            <figure className="w-48 overflow-hidden">
               <img
                  src={props.image}
                  alt="product-image"
                  loading="lazy"
                  className="w-full object-contain aspect-square"
               />
            </figure>
         </div>
         <div className="pt-3 h-full flex flex-col justify-between">
            <div className="px-8 space-y-1">
               <h3 className="text-3xl font-bold">${props.price.toFixed(2)}</h3>
               <span className="text-sm text-gray-500">{props.category}</span>
               <p className="text-lg font-semibold">{props.title}</p>
               <p className="text-xs text-gray-500 w-full text-ellipsis flex-nowrap line-clamp-4">
                  {props.description}
               </p>
               <div className="mt-3 flex items-center space-x-1 pt-1">
                  <span className="text-sm">{props.rating.rate}</span>
                  {Array(Math.ceil(props.rating.rate))
                     .fill("")
                     .map((_, id) => (
                        <FaStar className="text-lg" key={id} />
                     ))}
               </div>
            </div>
            <div className="px-8 pb-4 pt-6">
               <button
                  className="w-full py-2.5 bg-[var(--orange)] text-white rounded text-sm capitalize shadow active:scale-[0.98] inter"
                  onClick={addToCartButton}
               >
                  Add To Cart
               </button>
            </div>
         </div>
      </div>
   );
}

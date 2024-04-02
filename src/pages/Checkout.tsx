import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToCart_list, removeItem } from "../redux/addToCart_reducer";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosInformationCircle } from "react-icons/io";
import { ProductList } from "../interfaces/product_lits";

export default function Checkout(): React.JSX.Element {
   const addToCart = useAppSelector(addToCart_list);
   const [total, setTotal] = useState<number>(0);

   useEffect(() => {
      (function () {
         const sum = addToCart.map((items) => items.price).reduce((oldValue, newValue) => oldValue + newValue, 0);
         setTotal(sum);
      })();
      console.log(addToCart);
   }, [addToCart]);

   return (
      <section className="p-6 pb-16">
         <div className="m-auto max-w-7xl space-y-6 md:space-y-0 md:flex md:space-x-6">
            <div className=" bg-white p-5 flex-1 min-w-max w-full">
               <div className="border-b">
                  <h1 className="text-2xl font-normal">Shopping Cart</h1>
                  <div className="text-end mt-2">
                     <p className="text-xs text-gray-500">Price</p>
                  </div>
               </div>

               {addToCart.map((items, id) => (
                  <CheckItems
                     title={items.title}
                     image={items.image}
                     category={items.category}
                     description={items.description}
                     id={items.id}
                     price={items.price}
                     rating={items.rating}
                     key={id}
                  />
               ))}

               <div className="text-end text-lg pt-1">
                  <span>Subtotal &#40;{addToCart.length} items&#41;: </span>
                  <span className="font-semibold">&#36;{total.toFixed(2)}</span>
               </div>
            </div>

            {/* Proceed to checkout area. */}
            <div className="p-4 bg-white md:min-w-72 h-full space-y-1">
               <div className="flex items-start justify-between space-x-1">
                  <IoIosInformationCircle className="text-xl" />
                  <p className="text-xs w-[90%]">
                     Add $13.04 of eligible items to your order to qualify for FREE Shipping &#40;excludes remote
                     locations&#41;.{" "}
                     <Link to="/" className="text-blue-700 hover:underline">
                        Details
                     </Link>
                  </p>
               </div>
               <div className="text-start text-lg pt-1">
                  <span>Subtotal &#40;{addToCart.length} items&#41;: </span>
                  <span className="font-semibold">&#36;{total.toFixed(2)}</span>
               </div>
               <button className="w-full bg-yellow-400 py-2 rounded-lg text-xs hover:bg-yellow-500 font-medium !mt-3 active:scale-[0.99]">
                  Proceed to Checkout
               </button>
            </div>
         </div>
      </section>
   );
}

const CheckItems = (items: ProductList) => {
   const dispatch = useAppDispatch();
   const [quantity, setQuantity] = useState<number>(1);

   const deleteItem = () => dispatch(removeItem({ id: items.id }));

   console.log(quantity);

   return (
      <div className="flex justify-between p-4 pt-6 border-b">
         <div className="flex items-center justify-center pl-16 pr-16">
            <figure className="w-28 overflow-hidden">
               <img src={items.image} alt="cart-product" className="w-full object-contain aspect-auto" />
            </figure>
         </div>
         <div className="flex-1">
            <div className="flex items-center justify-between space-x-16">
               <p className="text-xl font-medium w-[510px]">{items.title}</p>
               <p className="font-semibold text-base">&#36;{items.price.toFixed(2)}</p>
            </div>
            <div className="text-xs pt-2 space-y-1">
               <p className="text-green-800">In Stock</p>
               <p>
                  <span>Ships from and sold by </span>
                  <Link to="https://amazon.ca" className="text-blue-700 hover:underline">
                     Amazon.ca
                  </Link>
               </p>
               <p>Eligible for FREE Shipping</p>
               <div className="flex items-center text-[11px]">
                  <input type="checkbox" className="w-5" />
                  <p className="">
                     <span className="font-medium">This will be a gift </span>
                     <Link to="https://amazon.ca" className="text-blue-700 hover:underline">
                        Learn more
                     </Link>
                  </p>
               </div>
            </div>
            <div className="pt-4 flex">
               <div className="flex items-center space-x-3 pr-5">
                  <div
                     className="border p-0.5 rounded cursor-pointer active:bg-gray-200"
                     onClick={() => {
                        if (quantity === 0) return;
                        setQuantity(quantity - 1);
                     }}
                  >
                     <AiOutlineMinus className="text-sm" />
                  </div>
                  <span className="text-sm">{quantity}</span>
                  <div
                     className="border p-0.5 rounded cursor-pointer active:bg-gray-200"
                     onClick={() => setQuantity(quantity + 1)}
                  >
                     <AiOutlinePlus className="text-sm" />
                  </div>
               </div>
               <div className="px-5 border-l text-sky-800">
                  <span className="text-xs cursor-pointer hover:underline" onClick={deleteItem}>
                     Delete
                  </span>
               </div>
               <div className="px-5 border-l text-sky-800">
                  <span className="text-xs cursor-pointer hover:underline">Save for later</span>
               </div>
               <div className="px-5 border-l text-sky-800">
                  <span className="text-xs cursor-pointer hover:underline">Share</span>
               </div>
            </div>
         </div>
      </div>
   );
};

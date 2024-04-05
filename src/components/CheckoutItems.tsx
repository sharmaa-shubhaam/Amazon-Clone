import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { removeItem, updateItem } from "../redux/addToCart_reducer";
import { ProductList } from "../interfaces/product_lits";
import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function CheckoutItems(items: ProductList): React.JSX.Element {
   const dispatch = useAppDispatch();
   const deleteItem = () => dispatch(removeItem({ id: items.id }));

   return (
      <div className="flex justify-between p-4 pt-6 border-b">
         <div className="flex items-center justify-center pl-5 pr-10 lg:pl-16 lg:pr-16">
            <figure className="w-20 lg:w-24 xl:w-28 overflow-hidden">
               <img src={items.image} alt="cart-product" className="w-full object-contain aspect-auto" />
            </figure>
         </div>
         <div className="flex-1">
            <div className="flex items-center justify-between space-x-16">
               <p className="text-base md:text-xl font-medium max-w-[510px]">{items.title}</p>
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
                        dispatch(updateItem({ id: items.id, type: "SUB" }));
                     }}
                  >
                     <AiOutlineMinus className="text-sm" />
                  </div>
                  <span className="text-sm">{items.quantity}</span>
                  <div
                     className="border p-0.5 rounded cursor-pointer active:bg-gray-200"
                     onClick={() => dispatch(updateItem({ id: items.id, type: "ADD" }))}
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
}

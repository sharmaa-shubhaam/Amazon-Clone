import React from "react";
import Amazon from "../assets/Amazon.png";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import ReactCountryFlag from "react-country-flag";
import { useAppSelector } from "../redux/hooks";
import { addToCart_list } from "../redux/addToCart_reducer";

export default function Header(): React.JSX.Element {
   const cart_length = useAppSelector(addToCart_list).length;

   return (
      <header className="bg-[var(--dark-blue)] px-4 py-[1px] text-white">
         <div className="h-14 flex items-center justify-between">
            <div className="flex items-center">
               <div className="px-3 pt-2.5  pb-1 hover:outline hover:outline-1 hover:outline-white rounded-sm">
                  <Link to="/">
                     <figure className="w-24">
                        <img src={Amazon} alt="nav-logo" className="w-full" />
                     </figure>
                  </Link>
               </div>
               <div className="flex items-end px-1.5 pr-2.5 py-2 hover:outline hover:outline-1 hover:outline-white rounded-sm cursor-pointer space-x-[1px] min-w-max">
                  <HiOutlineLocationMarker className="text-xl mb-[2px] text-white" />
                  <div className="flex items-center flex-col -space-y-1">
                     <span className="text-xs text-gray-300">Deliver to shubham</span>
                     <span className="text-sm font-bold text-white">Brampton L6Y 5P</span>
                  </div>
               </div>
            </div>
            <div className="flex-1 px-3">
               <div className="flex rounded overflow-hidden min-w-96">
                  <div className="flex items-center pl-2.5 pr-1 bg-gray-200 space-x-1 cursor-pointer text-gray-700 border-r border-gray-300 hover:bg-gray-300">
                     <span className="text-xs">All</span>
                     <IoMdArrowDropdown />
                  </div>
                  <input
                     type="text"
                     className="w-full px-2 py-2 outline-none text-black roboto-regular border-none"
                     placeholder="Search Amazon.ca"
                  />
                  <div className="flex items-center px-3 bg-[var(--orange)] space-x-1 cursor-pointer text-gray-700">
                     <IoSearch className="text-2xl" />
                  </div>
               </div>
            </div>
            <nav className="flex items-center">
               <Link to="/">
                  <div className="flex item-end hover:outline hover:outline-1 hover:outline-white cursor-pointer pt-5 pb-2 px-3 rounded-sm min-w-max space-x-1">
                     <ReactCountryFlag countryCode="CA" svg className="w-8 h-8" title="CA" />
                     <div className="flex items-end">
                        <span className="text-sm font-bold">EN</span>
                        <IoMdArrowDropdown className="text-sm" />
                     </div>
                  </div>
               </Link>
               <Link to="/">
                  <div className="flex center flex-col -space-y-1 hover:outline hover:outline-1 hover:outline-white cursor-pointer py-2 pl-2 pr-1 rounded-sm min-w-max">
                     <span className="text-xs">Hello, Shubham</span>
                     <div className="flex items-center">
                        <span className="text-sm font-semibold">Account & Lists</span>
                        <IoMdArrowDropdown className="text-sm" />
                     </div>
                  </div>
               </Link>
               <Link to="/">
                  <div className="flex center flex-col -space-y-1 hover:outline hover:outline-1 hover:outline-white cursor-pointer py-1.5 px-2 rounded-sm min-w-max">
                     <span className="text-xs">Returns</span>
                     <span className="font-bold">& Orders</span>
                  </div>
               </Link>
               <Link to="/checkout?ref=cart_logo">
                  <div className="flex items-end hover:outline hover:outline-1 hover:outline-white cursor-pointer py-2 px-2 rounded-sm min-w-max relative">
                     <span className="bg-[var(--orange)] text-white w-4 h-4 flex items-center justify-center rounded-full absolute top-1 text-xs left-6">
                        {cart_length}
                     </span>
                     <RiShoppingCartLine className="text-3xl" />
                     <span className="text-sm font-semibold">Cart</span>
                  </div>
               </Link>
            </nav>
         </div>
      </header>
   );
}

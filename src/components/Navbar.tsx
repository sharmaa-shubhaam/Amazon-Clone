import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(): React.JSX.Element {
   return (
      <nav className="flex justify-between h-9 bg-[var(--light-blue)] text-white pl-3 pr-1 space-x-10">
         <div className="flex">
            <Link to="/">
               <div className="hover:outline hover:outline-1 hover:outline-white h-[98%] rounded-sm px-2.5 flex items-center justify-center text-sm font-medium space-x-1 min-w-max">
                  <GiHamburgerMenu className="text-xl" />
                  <span>All</span>
               </div>
            </Link>
            <Link to="/">
               <div className="hover:outline hover:outline-1 hover:outline-white h-[98%] rounded-sm px-2.5 flex items-center justify-center text-sm font-medium min-w-max">
                  Buy Again
               </div>
            </Link>
            <Link to="/">
               <div className="hover:outline hover:outline-1 hover:outline-white h-[98%] rounded-sm px-2.5 flex items-center justify-center text-sm font-medium min-w-max">
                  <span>Browsing History</span>
                  <IoMdArrowDropdown className="text-sm ml-1 text-gray-400" />
               </div>
            </Link>
            <Link to="/">
               <div className="hover:outline hover:outline-1 hover:outline-white h-[98%] rounded-sm px-2.5 flex items-center justify-center text-sm font-medium min-w-max">
                  Deals Store
               </div>
            </Link>
            <Link to="/">
               <div className="hover:outline hover:outline-1 hover:outline-white h-[98%] rounded-sm px-2.5 items-center justify-center text-sm font-medium min-w-max hidden sm:flex">
                  Kindle Books
               </div>
            </Link>
            <Link to="/">
               <div className="hover:outline hover:outline-1 hover:outline-white h-[98%] rounded-sm px-2.5 hidden md:flex items-center justify-center text-sm font-medium space-x-1 min-w-max">
                  <span className="overflow-hidden w-[55px] text-ellipsis flex-nowrap">Shubham</span>
                  <span>'s Store</span>
               </div>
            </Link>
            <Link to="/">
               <div className="hover:outline hover:outline-1 hover:outline-white h-[98%] rounded-sm px-2.5 hidden md:flex items-center justify-center text-sm font-medium min-w-max">
                  Books
               </div>
            </Link>
            <Link to="/">
               <div className="hover:outline hover:outline-1 hover:outline-white h-[98%] rounded-sm px-2.5 hidden lg:flex items-center justify-center text-sm font-medium min-w-max">
                  Best Sellers
               </div>
            </Link>
            <Link to="/">
               <div className="hover:outline hover:outline-1 hover:outline-white h-[98%] rounded-sm px-2.5 hidden xl:flex items-center justify-center text-sm font-medium min-w-max">
                  Coupons
               </div>
            </Link>
         </div>

         <Link
            to="/"
            className="hover:outline hover:outline-1 hover:outline-white h-[98%] rounded-sm pr-6 text-2xl text-end min-w-max hidden flex-1 xl:block"
         >
            <span className="font-bold">Road House </span>
            <span>- New movie</span>
         </Link>
      </nav>
   );
}

import React from "react";
import Amazon from "../assets/Amazon.png";

export default function Header(): React.JSX.Element {
   return (
      <header>
         <div>
            <figure className="w-32">
               <img src={Amazon} alt="nav-logo" className="w-full" />
            </figure>
         </div>
      </header>
   );
}

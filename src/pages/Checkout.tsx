import React, { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { addToCart_list } from "../redux/addToCart_reducer";
import { Link } from "react-router-dom";
import { IoIosInformationCircle } from "react-icons/io";
import CheckoutItems from "../components/CheckoutItems";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

export default function Checkout(): React.JSX.Element {
   const addToCart = useAppSelector(addToCart_list);
   const [total, setTotal] = useState<number>(0);

   // Create the checkout session.
   const ProceedToCheckout = async () => {
      try {
         // Loading the stripe with Public Key of stripe.
         if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) throw new Error("No Stripe Public Key.");
         const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

         // create stripe checkout session, with the backend api.
         if (!import.meta.env.VITE_SERVER_URL) throw new Error("No Server Url.");
         const stripeCheckoutSession = await axios({
            method: "POST",
            url: `${import.meta.env.VITE_SERVER_URL}/stripe-checkout`,
            data: addToCart,
            headers: {
               "Content-Type": "application/json",
            },
         });

         // once the backend post axios api successful.
         // redirect to stripe checkout page with the session id got from backend.
         await stripe?.redirectToCheckout({
            sessionId: stripeCheckoutSession.data.id,
         });
      } catch (error: any) {
         console.log("Debug Proceed to Checkout Error: >>>>>>>>>>>" + error);
      }
   };

   // update total price when ever the addToCart store update.
   useEffect(() => {
      (function () {
         const sum = addToCart
            .map((items) => {
               return items.price * items.quantity;
            })
            .reduce((oldValue, newValue) => {
               return oldValue + newValue;
            }, 0);

         setTotal(sum);
      })();
   }, [addToCart]);

   return (
      <section className="p-6 pb-16">
         <div className="m-auto max-w-7xl space-y-6 lg:space-y-0 lg:flex lg:space-x-6">
            <div className=" bg-white p-5 flex-1">
               <div className="border-b">
                  <h1 className="text-2xl font-normal">Shopping Cart</h1>
                  <div className="text-end mt-2">
                     <p className="text-xs text-gray-500">Price</p>
                  </div>
               </div>
               {addToCart.map((items, id) => (
                  <CheckoutItems
                     title={items.title}
                     image={items.image}
                     category={items.category}
                     description={items.description}
                     id={items.id}
                     price={items.price}
                     rating={items.rating}
                     key={id}
                     quantity={items.quantity}
                  />
               ))}
               <div className="text-end text-lg pt-1">
                  <span>Subtotal &#40;{addToCart.length} items&#41;: </span>
                  <span className="font-semibold">&#36;{total.toFixed(2)}</span>
               </div>
            </div>

            {/* Proceed to checkout area. */}
            <div className="p-4 bg-white w-full lg:w-80 h-full space-y-1">
               <div className="flex items-center lg:items-start lg:justify-between space-x-3">
                  <IoIosInformationCircle className="text-xl" />
                  <p className="text-xs w-[90%] text-justify">
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
               <button
                  onClick={ProceedToCheckout}
                  className="w-full bg-yellow-400 py-2 rounded-lg text-xs hover:bg-yellow-500 font-medium !mt-3 active:scale-[0.99]"
               >
                  Proceed to Checkout
               </button>
            </div>
         </div>
      </section>
   );
}

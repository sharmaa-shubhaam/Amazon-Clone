import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Home = React.lazy(() => import("./pages/Home"));
const Checkout = React.lazy(() => import("./pages/Checkout"));

export default function App(): React.JSX.Element {
   return (
      <>
         <Header />
         <Navbar />
         <Routes>
            <Route
               path="/"
               element={
                  <Suspense fallback={<h1>loading home...</h1>}>
                     <Home />
                  </Suspense>
               }
            />
            <Route
               path="/checkout"
               element={
                  <Suspense fallback={<h1>Loading checkout</h1>}>
                     <Checkout />
                  </Suspense>
               }
            />
         </Routes>
      </>
   );
}

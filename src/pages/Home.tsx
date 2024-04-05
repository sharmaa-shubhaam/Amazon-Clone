import React, { useEffect } from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/Product_Card";
import { fakeStoreApi, product_list } from "../redux/product_reducer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function Home(): React.JSX.Element {
   const dispatch = useAppDispatch();
   const products = useAppSelector(product_list);

   useEffect(() => {
      dispatch(fakeStoreApi());
   }, []);

   return (
      <section className="pb-20">
         <Banner />
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:-mt-52 px-5">
            {products.map((items) => (
               <ProductCard
                  image={items.image}
                  category={items.category}
                  description={items.description}
                  id={items.id}
                  price={items.price}
                  rating={{ rate: items.rating.rate, count: items.rating.count }}
                  title={items.title}
                  key={items.id}
                  quantity={1}
               />
            ))}
         </div>
      </section>
   );
}

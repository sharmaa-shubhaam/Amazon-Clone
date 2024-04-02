import { configureStore } from "@reduxjs/toolkit";
import product_reducer from "./product_reducer";
import addToCart_reducer from "./addToCart_reducer";

const store = configureStore({
   reducer: {
      products: product_reducer,
      addToCart: addToCart_reducer,
   },
});

export default store;

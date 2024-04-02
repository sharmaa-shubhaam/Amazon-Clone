import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./hooks";
import { ProductList } from "../interfaces/product_lits";

interface AddToCartProductList {
   quantity: string;
   itemprice: string;
}

type NewProductList = AddToCartProductList & ProductList;

export const addToCart_reducer = createSlice({
   name: "addToCart",
   initialState: [] as ProductList[],
   reducers: {
      addToCart: (state, action: PayloadAction<ProductList>) => {
         return [...state, action.payload];
      },
      removeItem: (state, action: PayloadAction<{ id: number }>) => {
         return state.filter((items) => items.id !== action.payload.id);
      },
   },
});

export const { addToCart, removeItem } = addToCart_reducer.actions;
export const addToCart_list = (state: RootState) => state.addToCart;

export default addToCart_reducer.reducer;

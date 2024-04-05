import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./hooks";
import { ProductList } from "../interfaces/product_lits";

interface AddMoreToProductList {
   quantity: number;
}

type AddToCartProductList = ProductList & AddMoreToProductList;

export const addToCart_reducer = createSlice({
   name: "addToCart",
   initialState: [] as AddToCartProductList[],
   reducers: {
      addToCart: (state, action: PayloadAction<AddToCartProductList>) => {
         return [...state, action.payload];
      },
      removeItem: (state, action: PayloadAction<{ id: number }>) => {
         return state.filter((items) => items.id !== action.payload.id);
      },
      updateItem: (state, action: PayloadAction<{ type: "ADD" | "SUB"; id: number }>) => {
         if (action.payload.type === "ADD") {
            state.forEach((item) => {
               if (item.id === action.payload.id) {
                  item.quantity += 1;
               }
            });
         } else if (action.payload.type === "SUB") {
            state.forEach((item) => {
               if (item.id === action.payload.id) {
                  item.quantity -= 1;
               }
            });
         }
      },
   },
});

export const { addToCart, removeItem, updateItem } = addToCart_reducer.actions;
export const addToCart_list = (state: RootState) => state.addToCart;

export default addToCart_reducer.reducer;

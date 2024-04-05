import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./hooks";
import { ProductList } from "../interfaces/product_lits";
import axios from "axios";

export const fakeStoreApi = createAsyncThunk("product/fetch?limit=15", async () => {
   try {
      const { data } = await axios({
         method: "GET",
         url: "https://fakestoreapi.com/products?limit=10",
         timeout: 10000,
      });
      return data as ProductList[];
   } catch (error: any) {
      return [];
   }
});

export const product_reducer = createSlice({
   name: "product",
   initialState: [] as ProductList[],
   reducers: {},
   extraReducers(builder) {
      builder.addCase(fakeStoreApi.fulfilled, (_, { payload }: PayloadAction<ProductList[]>) => {
         return payload;
      });
   },
});

export const product_list = (state: RootState) => state.products;

export default product_reducer.reducer;

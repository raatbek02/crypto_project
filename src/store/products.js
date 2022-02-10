import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProducts(state, action) {
      return {
        products: action.payload,
      };
    },
  },
});

export const { addProducts } = products.actions;
export default products.reducer;

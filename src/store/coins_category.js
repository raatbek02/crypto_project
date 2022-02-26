import { createSlice } from "@reduxjs/toolkit";

const coins_category = createSlice({
  name: "coins",
  initialState: {
    coins: [],
  },
  reducers: {
    addCoins(state, action) {
      return {
        coins: action.payload,
      };
    },
  },
});

export const { addCoins } = coins_category.actions;
export default coins_category.reducer;

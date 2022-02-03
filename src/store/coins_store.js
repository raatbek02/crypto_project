import { createSlice } from "@reduxjs/toolkit";

const coins_store = createSlice({
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

export const { addCoins } = coins_store.actions;
export default coins_store.reducer;

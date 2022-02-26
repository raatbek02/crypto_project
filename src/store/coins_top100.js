import { createSlice } from "@reduxjs/toolkit";

const coins_top100 = createSlice({
  name: "coins_top100",
  initialState: {
    coins_top100: [],
  },
  reducers: {
    addCoinsTop100(state, action) {
      return {
        coins_top100: action.payload,
      };
    },
  },
});

export const { addCoinsTop100 } = coins_top100.actions;
export default coins_top100.reducer;

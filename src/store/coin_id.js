import { createSlice } from "@reduxjs/toolkit";

const coin_id = createSlice({
  name: "coins",
  initialState: {
    coin_id: "bitcoin",
  },
  reducers: {
    add_coinId(state, action) {
      return {
        coin_id: action.payload,
      };
    },
  },
});

export const { add_coinId } = coin_id.actions;
export default coin_id.reducer;

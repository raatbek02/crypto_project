import { createSlice } from "@reduxjs/toolkit";

const bitcoin_data = localStorage.getItem("bitcoin_data");

const coin_detail = createSlice({
  name: "coin_detail",
  initialState: {
    coin_detail: {} || JSON.parse(bitcoin_data),
    //  coin_detail: {},
  },
  reducers: {
    add_coinDetail(state, action) {
      return {
        coin_detail: action.payload,
      };
    },
  },
});

export const { add_coinDetail } = coin_detail.actions;
export default coin_detail.reducer;

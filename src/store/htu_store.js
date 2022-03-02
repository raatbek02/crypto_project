import { createSlice } from "@reduxjs/toolkit";

const htu_store = createSlice({
  name: "htu_store",
  initialState: {
    htu_store: [],
  },
  reducers: {
    add_htu(state, action) {
      return {
        htu_store: action.payload,
      };
    },
  },
});

export const { add_htu } = htu_store.actions;
export default htu_store.reducer;

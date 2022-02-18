import { createSlice } from "@reduxjs/toolkit";

const activeBurger = createSlice({
  name: "activeBurger",
  initialState: {
    activeBurger: false,
  },
  reducers: {
    setActiveBurger(state, action) {
      return {
        activeBurger: action.payload,
      };
    },
  },
});

export const { setActiveBurger } = activeBurger.actions;
export default activeBurger.reducer;

import { createSlice } from "@reduxjs/toolkit";

const isAuthLocal = localStorage.getItem("isAuthLocal");

const isAuth = createSlice({
  name: "isAuth",
  initialState: {
    isAuth: false || JSON.parse(isAuthLocal),
  },
  reducers: {
    setIsAuth(state, action) {
      return {
        isAuth: action.payload,
      };
    },
  },
});

export const { setIsAuth } = isAuth.actions;
export default isAuth.reducer;

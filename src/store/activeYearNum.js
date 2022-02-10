import { createSlice } from "@reduxjs/toolkit";

const activeYearNum = createSlice({
  name: "activeYearNum",
  initialState: {
    activeYearNum: 1,
  },
  reducers: {
    set_activeYearNum(state, action) {
      return {
        activeYearNum: action.payload,
      };
    },
  },
});

export const { set_activeYearNum } = activeYearNum.actions;
export default activeYearNum.reducer;

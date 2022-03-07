import { createSlice } from "@reduxjs/toolkit";

const deviceItem = createSlice({
  name: "deviceItem",
  initialState: {
    deviceItem: [],
  },
  reducers: {
    setDeviceItem(state, action) {
      return {
        deviceItem: action.payload,
      };
    },
  },
});

export const { setDeviceItem } = deviceItem.actions;
export default deviceItem.reducer;

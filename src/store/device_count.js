import { createSlice } from "@reduxjs/toolkit";


const device_count = createSlice({
  name: "device_count",
  initialState: {
    device_count: 1,
  },
  reducers: {
    plusDevice(state, action) {
      state.device_count = state.device_count + action.payload;
    },
    minusDevice(state, action) {
      state.device_count =
        state.device_count - (state.device_count > 1 ? action.payload : 0);
    },
  },
});

export const { plusDevice, minusDevice } = device_count.actions;
export default device_count.reducer;

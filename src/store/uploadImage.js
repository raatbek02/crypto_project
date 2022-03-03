import { createSlice } from "@reduxjs/toolkit";

const uploadImage = createSlice({
  name: "uploadImage",
  initialState: {
    uploadImage: "",
  },
  reducers: {
    add_uploadImage(state, action) {
      return {
        uploadImage: action.payload,
      };
    },
  },
});

export const { add_uploadImage } = uploadImage.actions;
export default uploadImage.reducer;

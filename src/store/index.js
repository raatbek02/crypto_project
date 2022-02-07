import { configureStore } from "@reduxjs/toolkit";
import coins_store from "./coins_store";
import coin_id from "./coin_id";
import coin_detail from "./coin_detail";
import device_count from "./device_count";

export default configureStore({
  reducer: {
    coins_store,
    coin_id,
    coin_detail,
    device_count,
  },
});

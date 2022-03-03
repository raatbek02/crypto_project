import { configureStore } from "@reduxjs/toolkit";
import coins_category from "./coins_category";
import coin_id from "./coin_id";
import coin_detail from "./coin_detail";
import coins_top100 from "./coins_top100";
import device_count from "./device_count";
import products from "./products";
import activeYearNum from "./activeYearNum";
import activeBurger from "./activeBurger";
import htu_store from "./htu_store";
import uploadImage from "./uploadImage";
import isAuth from "./isAuth";

export default configureStore({
  reducer: {
    coins_category,
    coin_id,
    coin_detail,
    coins_top100,
    device_count,
    products,
    activeYearNum,
    activeBurger,
    htu_store,
    uploadImage,
    isAuth,
  },
});

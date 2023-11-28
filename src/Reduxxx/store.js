 import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slice';
import fetchslice from "./fetchslice";
const store = configureStore({
    reducer :{
    cart : cartSlice,
    fetchdata : fetchslice,
    }
})

export default store
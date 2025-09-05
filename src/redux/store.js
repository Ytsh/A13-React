import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterReducer";
import cartReducer from "./reducer/cartSlice";
export const store = configureStore({
    reducer: {
        counter:counterReducer,
        cart: cartReducer,
    }
});

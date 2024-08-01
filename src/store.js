import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './features/cartSlice'

let store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default store
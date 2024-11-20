import { configureStore } from "@reduxjs/toolkit";
 import userReducer from './userSlice.js'
export const Store = configureStore({
    reducer:{
        user:userReducer
    },
})
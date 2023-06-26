'use client'
import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./Features/authSlice"
export const store = configureStore({
    reducer:{
        AuthReducer
    }
})
export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
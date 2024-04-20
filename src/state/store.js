import { configureStore } from "@reduxjs/toolkit"
// import counterslice from "./counterslice"
import themeProviderSlice from "./themeProviderSlice"


export const store =  configureStore({
    reducer: {
        darkMode: themeProviderSlice
    }
})
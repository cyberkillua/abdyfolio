import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false
};

const themeProviderSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    // increament: (state, action) => {
    //  state.value += action.payload
    // },
    // decreament: (state) => {
    //     state.value += 1
    // },
    toggleDarkmode: (state) => {
        state.darkMode = !state.darkMode
    }
  },
});


export default themeProviderSlice.reducer;
// export const { increament, decreament } = counterSlice.actions 
export const { toggleDarkmode } = themeProviderSlice.actions
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: true
}

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode(state, action){
      state.isDark = !state.isDark
    }
  }
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default  darkModeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: "All"
};

const activeRegionSlice = createSlice({
  name: "curRegion",
  initialState,
  reducers: {
    setCurRegion(state, action){
      state.region = action.payload;
    }
  }
});

export const { setCurRegion } = activeRegionSlice.actions;

export default activeRegionSlice.reducer;
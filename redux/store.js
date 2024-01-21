import { configureStore } from "@reduxjs/toolkit";

import darkModeSlice from "./reducers/darkMode";
import activeRegionSlice from "./reducers/activeRegion";

export const store = configureStore({
  reducer: {
    theme: darkModeSlice,
    region: activeRegionSlice
  }
});
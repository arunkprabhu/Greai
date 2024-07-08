import { configureStore } from "@reduxjs/toolkit";
import GreaiReducer from "./slices/GreaiReducer";

export const store = configureStore({
  reducer: {
    greai: GreaiReducer,
  },
});

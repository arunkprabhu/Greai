import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProgressOpen: true,
};

const GreaiReducer = createSlice({
  name: "greai",
  initialState,
  reducers: {
    updateIsProgressOpen: (state, action) => {
      return {
        ...state,
        isProgressOpen: action.payload,
      };
    },
  },
});

export const { updateIsProgressOpen } = GreaiReducer.actions;
export default GreaiReducer.reducer;

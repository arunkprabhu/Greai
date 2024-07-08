import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProgressOpen: true,
  isTranscriptionDetailOpen: false,
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
    updateTranscriptionDetailOpen: (state, action) => {
      return {
        ...state,
        isTranscriptionDetailOpen: action.payload,
      };
    },
  },
});

export const { updateIsProgressOpen, updateTranscriptionDetailOpen } =
  GreaiReducer.actions;
export default GreaiReducer.reducer;

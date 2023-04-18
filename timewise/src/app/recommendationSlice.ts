import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: [],
  reducers: {
    setRecommendation: (state,actions) => {
      state = actions.payload;
      return state;
    },
  },
});

export const { setRecommendation } = recommendationSlice.actions;

export default recommendationSlice.reducer;

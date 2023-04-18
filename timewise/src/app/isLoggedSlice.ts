import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loggedSlice = createSlice({
  name: "logged",
  initialState: false,
  reducers: {
    setLogged: (state) => {
      state = !state;
      return state;
    },
  },
});

export const { setLogged } = loggedSlice.actions;

export default loggedSlice.reducer;

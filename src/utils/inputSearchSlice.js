import { createSlice } from "@reduxjs/toolkit";

const inputSearchSlice = createSlice({
  name: "inputSearch",
  initialState: {
    searchValue: "",
  },
  reducers: {
    findVideo: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});
export const { findVideo } = inputSearchSlice.actions;
export default inputSearchSlice.reducer;

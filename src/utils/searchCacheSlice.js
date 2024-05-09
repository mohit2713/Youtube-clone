import { createSlice } from "@reduxjs/toolkit";

const cache = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    storeCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { storeCache } = cache.actions;
export default cache.reducer;

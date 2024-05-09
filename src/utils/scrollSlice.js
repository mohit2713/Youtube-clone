import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    videos: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    immerge: (state, action) => {
      state.videos = state.videos.concat(action.payload);
      state.videos.splice(0, 23);
    },
  },
});
export const { addVideos, immerge } = scrollSlice.actions;
export default scrollSlice.reducer;

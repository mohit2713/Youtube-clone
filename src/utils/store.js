import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchCacheSlice from "./searchCacheSlice";
import inputSearchSlice from "./inputSearchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchCacheSlice,
    inputSearch: inputSearchSlice,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchCacheSlice from "./searchCacheSlice";
import inputSearchSlice from "./inputSearchSlice";
import chatSlice from "./chatSlice";
import scrollSlice from "./scrollSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchCacheSlice,
    inputSearch: inputSearchSlice,
    chat: chatSlice,
    scroll: scrollSlice,
  },
});

export default store;

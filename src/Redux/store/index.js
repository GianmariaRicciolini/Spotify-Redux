import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../reducers";

const store = configureStore({
  reducer: {
    track: playerReducer,
  },
});

export default store;

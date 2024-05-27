import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import profileReducer from "./profileSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
});

export default store;

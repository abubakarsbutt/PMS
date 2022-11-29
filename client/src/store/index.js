import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./app-splice";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export const { setLogout, setUser, setToken } = appSlice.actions;

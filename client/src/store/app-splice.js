import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  token: localStorage.getItem("token") || "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setToken(state, action) {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
    setLogout(state, action) {
      localStorage.removeItem("token");
      state.token = action?.payload;
    },
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogin: false, role: "" };
const AuthSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    signIn(state, action) {
      state.isLogin = true;
      state.role = action.payload;
    },

    logout(state) {
      state.isLogin = false;
      state.role = "";
    },
  },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;

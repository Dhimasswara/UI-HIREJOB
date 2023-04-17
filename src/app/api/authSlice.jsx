import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: undefined,
    role: undefined,
    idUser: undefined,

  },
  reducers: {
    setCredentials: (state, { payload }) => {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("role", payload.role);
      localStorage.setItem("id", payload.idUser);
      state.user = payload.user;
      state.token = payload.token;
      state.role = payload.role;
      state.id = payload.idUser;
    },

    logout: (state, action) => {
      localStorage.clear()
      state.user = {};
      state.token = undefined;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const currentUser = (state) => state.auth.user;
export default authSlice.reducer;
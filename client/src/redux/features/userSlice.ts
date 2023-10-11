import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../api/types";

interface IUserState {
  email: string | null;
  token: string | null;
  id: string | null;
  isAuthenticated: boolean | null;
}

const initialState: IUserState = {
  email: null,
  token: null,
  id: null,
  isAuthenticated: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state, action) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export default userSlice.reducer;

export const actionsUser = userSlice.actions;

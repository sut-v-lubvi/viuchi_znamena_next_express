import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../api/types";

interface IUserState {
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: IUserState = {
  email: null,
  token: null,
  id: null,
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
  },
});

export default userSlice.reducer;

export const { removeUser, setUser } = userSlice.actions;

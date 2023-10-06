import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { testSlice } from "../features/currentTestState";
import { addTestSlice } from "../features/addTest";
import { authApi } from "../api/api";

export const store = configureStore({
  reducer: {
    testSlice: testSlice.reducer,
    addTestSlice: addTestSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

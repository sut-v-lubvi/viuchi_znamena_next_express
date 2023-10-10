import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { testSlice } from "../features/currentTestState";
import { addTestSlice } from "../features/addTest";
import { authApi } from "../api/authApi";
import { testApi } from "../api/testApi";

export const store = configureStore({
  reducer: {
    testSlice: testSlice.reducer,
    addTestSlice: addTestSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(testApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

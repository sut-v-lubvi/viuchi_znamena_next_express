import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { currentTestSlice } from "../features/currentTestState";
import { addTestSlice } from "../features/addTest";
import { authApi } from "../api/authApi";
import { testApi } from "../api/testApi";
import { userSlice } from "../features/userSlice";
import { userApi } from "../api/userApi";
import { uploadAPI } from "../api/uploadAPI";

export const store = configureStore({
  reducer: {
    testSlice: currentTestSlice.reducer,
    addTestSlice: addTestSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [testApi.reducerPath]: testApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [uploadAPI.reducerPath]: uploadAPI.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      testApi.middleware,
      userApi.middleware,
      uploadAPI.middleware,
    ]),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

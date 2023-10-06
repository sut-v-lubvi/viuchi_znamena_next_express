import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: " http://localhost:5000" }),
  endpoints: (build) => ({
    register: build.mutation({
      query: (body) => ({
        url: "/api/auth/register",
        method: "POST",
        body,
      }),
    }),
    isLogin: build.mutation({
      query: (body) => ({
        url: "/api/auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useRegisterMutation, useIsLoginMutation } = authApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGenericResponse } from "./types";
import { TestType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import { RegisterInput } from "@/app/auth/registration/page";
import { LoginInput } from "@/app/auth/login/page";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test-crlu.onrender.com/api" }),
  endpoints: (build) => ({
    register: build.mutation<IGenericResponse, RegisterInput>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
    isLogin: build.mutation<
      { access_token: string; status: string },
      LoginInput
    >({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    addNewTest: build.mutation({
      query({ questions, icon, description, name }) {
        debugger;
        return {
          url: "addTest",
          method: "POST",
          body: { questions, icon, description, name },
          credentials: "include",
        };
      },
    }),
  }),
});
export const {
  useRegisterMutation,
  useIsLoginMutation,
  useAddNewTestMutation,
} = authApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGenericResponse } from "./types";
import { LoginInput } from "@/widgets/AuthPage";
import { TestType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (build) => ({
    register: build.mutation<IGenericResponse, LoginInput>({
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
        credentials: "include",
      }),
    }),
    addNewTest: build.mutation({
      query({ questions, icon, description, id, name }) {
        debugger;
        console.log({ questions, icon, description, id, name });
        return {
          url: "addTest",
          method: "POST",
          body: { questions, icon, description, id, name },
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

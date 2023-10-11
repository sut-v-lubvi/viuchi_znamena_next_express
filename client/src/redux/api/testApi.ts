import { TestType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testApi = createApi({
  reducerPath: "test",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test-crlu.onrender.com/api" }),
  endpoints: (build) => ({
    getTests: build.query({
      query: () => ({
        url: "getTests",
      }),
    }),
  }),
});
export const { useGetTestsQuery } = testApi;

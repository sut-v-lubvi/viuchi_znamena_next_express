import { TestType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITest } from "./types";

export const testApi = createApi({
  reducerPath: "test",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test-crlu.onrender.com/api" }),
  tagTypes: ["Test"],
  endpoints: (build) => ({
    getTests: build.query<ITest[], void>({
      query: () => ({
        url: "getTests",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Test" as const, id })),
              { type: "Test", id: "LIST" },
            ]
          : [{ type: "Test", id: "LIST" }],
    }),
    getCurrentTest: build.query<ITest, string>({
      query: (testId) => ({
        url: `getTest/${testId}`,
      }),
    }),
    deleteTest: build.mutation<void, string>({
      query: (testId) => ({
        url: `delete/${testId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Test", id: "LIST" }],
    }),
    addNewTest: build.mutation({
      query({ questions, icon, description, name }) {
        return {
          url: "addTest",
          method: "POST",
          body: { questions, icon, description, name },
        };
      },
      invalidatesTags: [{ type: "Test", id: "LIST" }],
    }),
    updateTest: build.mutation({
      query: ({ id, questions, icon, description, name }) => ({
        url: `/update/${id}`,
        method: "PUT",
        body: { name, icon, description, questions },
      }),
      invalidatesTags: [{ type: "Test", id: "LIST" }],
    }),
  }),
});
export const {
  useGetTestsQuery,
  useDeleteTestMutation,
  useAddNewTestMutation,
  useUpdateTestMutation,
  useGetCurrentTestQuery,
} = testApi;

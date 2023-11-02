import { TestType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITest } from "./types";

interface GetAll {
  data: {
    tests: ITest[]
  }
}

interface GetOne {
  data: {
    test: ITest
  }
}

export const testApi = createApi({
  reducerPath: "test",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/test" }),
  tagTypes: ["Test"],
  endpoints: (build) => ({
    getTests: build.query<GetAll, void>({
      query: () => ({
        url: "/get-all",
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.data.tests.map(({ _id }) => ({ type: "Test" as const, id: _id })),
            { type: "Test", id: "LIST" },
          ]
          : [{ type: "Test", id: "LIST" }],
    }),
    getCurrentTest: build.query<GetOne, string>({
      query: (testId) => ({
        url: `?id=${testId}`,
      }),
    }),
    deleteTest: build.mutation<void, string>({
      query: (testId) => ({
        url: `delete?id=${testId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Test", id: "LIST" }],
    }),
    addNewTest: build.mutation({
      query({ questions, icon, description, name }) {
        return {
          url: "/add",
          method: "POST",
          body: { questions, icon, description, name },
        };
      },
      invalidatesTags: [{ type: "Test", id: "LIST" }],
    }),
    updateTest: build.mutation({
      query: ({ id, questions, icon, description, name }) => ({
        url: `/update?id=${id}`,
        method: "PUT",
        body: { name, icon, description, questions },
      }),
      invalidatesTags: [{ type: "Test", id: "LIST" }],
    })
  }),
});
export const {
  useGetTestsQuery,
  useDeleteTestMutation,
  useAddNewTestMutation,
  useUpdateTestMutation,
  useGetCurrentTestQuery,
} = testApi;

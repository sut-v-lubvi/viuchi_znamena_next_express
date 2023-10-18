import { StatisticsType } from "@/app/profile/page";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUsers } from "./types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-crlu.onrender.com/api/user",
  }),
  endpoints: (build) => ({
    addTestStatistics: build.mutation({
      query: ({ userId, testId, name, correctAnswers, totalQuestions }) => ({
        url: `/add-statistics/${userId}`,
        method: "PUT",
        body: { testId, name, correctAnswers, totalQuestions },
      }),
    }),
    getTestStatistics: build.query<StatisticsType[], string>({
      query: (userId) => ({
        url: `/get-statistics/${userId}`,
        method: "GET",
      }),
    }),
    getUsers: build.query<IUsers[], void>({
      query: () => ({
        url: "/getUsers",
        method: "GET",
      }),
    }),
  }),
});
export const {
  useAddTestStatisticsMutation,
  useGetTestStatisticsQuery,
  useGetUsersQuery,
} = userApi;

import { StatisticsType } from "@/app/profile/page";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUsers } from "./types";

interface GetTestStatistics {
  data: {
    stat: StatisticsType[]
  }
}
interface GetUsers {
  data: {
    users: IUsers[]
  }
}

interface GetOneUser {
  data: {
    user: IUsers
  }
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/user",
  }),
  endpoints: (build) => ({
    addTestStatistics: build.mutation({
      query: ({ userId, testId, name, correctAnswers, totalQuestions }) => ({
        url: `/add-stat?id=${userId}`,
        method: "PUT",
        body: { testId, name, correctAnswers, totalQuestions },
      }),
    }),
    getTestStatistics: build.query<GetTestStatistics, string>({
      query: (userId) => ({
        url: `/get-stat?id=${userId}`,
        method: "GET",
      }),
    }),
    getUsers: build.query<GetUsers, void>({
      query: () => ({
        url: "/get-all",
        method: "GET",
      }),
    }),
    getUser: build.query<GetOneUser, string>({
      query: (userId) => ({
        url: `/get?id=${userId}`,
        method: "GET",
      }),
    }),
    uploadAvatar: build.mutation<{}, { userId: string; avatar: FormData }>({
      query: ({ userId, avatar }) => ({
        url: "/upload",
        method: "POST",
        body: { userId, avatar },
      }),
    }),
  }),
});
export const {
  useAddTestStatisticsMutation,
  useGetTestStatisticsQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useUploadAvatarMutation,
} = userApi;

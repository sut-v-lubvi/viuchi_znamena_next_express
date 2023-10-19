import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAvatar } from "./types";

export const uploadAPI = createApi({
  reducerPath: "uploadAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-crlu.onrender.com/api/user/",
  }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation<{}, IAvatar>({
      query(data) {
        return {
          url: `/${data.userId}/upload`,
          method: "POST",
          body: data.formData,
        };
      },
    }),
  }),
});

export const { useUploadImageMutation } = uploadAPI;

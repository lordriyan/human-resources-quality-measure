import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Posts {
  albumId: Number;
  id: Number;
  title: String;
  url: string;
  thumbnailUrl: string;
}

export const postsApi = createApi({
  reducerPath: "postsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({
    posts: builder.query<Posts[], void>({
      query: () => "/posts",
    }),
  }),
});

export const { usePostsQuery } = postsApi;

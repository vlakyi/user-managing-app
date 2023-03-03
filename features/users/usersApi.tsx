import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const userApi = createApi({
  reducerPath: "usersSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test-api.com/api/user" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getUserList: builder.query({
      query: () => `/getUsers`,
    }),
  }),
});

export const {
  useGetUserListQuery,
  util: { getRunningQueriesThunk },
} = userApi;
export const { getUserList } = userApi.endpoints;

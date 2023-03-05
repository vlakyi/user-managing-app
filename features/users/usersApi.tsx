import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, UserInput } from "mocks";
import { HYDRATE } from "next-redux-wrapper";

interface GetUserListResponse {
  users: User[];
}

export const userApi = createApi({
  reducerPath: "usersSlice",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://test-api.com/api/user" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getUserList: builder.query<GetUserListResponse, {}>({
      query: () => `/getUsers`,
    }),
    createUser: builder.mutation<User, UserInput>({
      query: (user) => ({
        url: `/create`,
        method: "POST",
        body: { user },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUserListQuery,
  useCreateUserMutation,
  util: { getRunningQueriesThunk },
} = userApi;
export const { getUserList, createUser } = userApi.endpoints;

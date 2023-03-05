import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, UserInput } from "mocks";
import { HYDRATE } from "next-redux-wrapper";

interface GetUserListResponse {
  users: User[];
}

interface GetUserByIdResponse {
  user: User;
}

interface EditUserInput {
  id: string;
  user: UserInput;
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
    getUserById: builder.query<GetUserByIdResponse, string>({
      query: (id) => `/getUser/${id}`,
    }),
    createUser: builder.mutation<User, UserInput>({
      query: (user) => ({
        url: `/create`,
        method: "POST",
        body: { user },
      }),
      invalidatesTags: ["Users"],
    }),
    editUser: builder.mutation<User, EditUserInput>({
      query: ({ id, user }) => ({
        url: `/edit/${id}`,
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
  useEditUserMutation,
  useGetUserByIdQuery,
  util: { getRunningQueriesThunk },
} = userApi;
export const { getUserList, createUser, getUserById } = userApi.endpoints;

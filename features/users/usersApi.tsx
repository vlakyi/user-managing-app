import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, UserInput } from "mocks";
import { HYDRATE } from "next-redux-wrapper";

interface GetUserListResponse {
  users: User[];
}

interface UserResponse {
  user: User;
}

interface EditUserInput {
  id: string;
  user: UserInput;
}

export const userApi = createApi({
  reducerPath: "usersSlice",
  tagTypes: ["User"],
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: "https://test-api.com/api/user" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getUserList: builder.query<GetUserListResponse, {}>({
      query: () => `/getUsers`,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.users.map(({ id }) => ({ type: "User" as const, id })),
              "User",
            ]
          : ["User"],
    }),
    getUserById: builder.query<UserResponse, string>({
      query: (id) => `/getUser/${id}`,
    }),
    createUser: builder.mutation<UserResponse, UserInput>({
      query: (user) => ({
        url: `/create`,
        method: "POST",
        body: { user },
      }),
      invalidatesTags: ["User"],
    }),
    editUser: builder.mutation<UserResponse, EditUserInput>({
      query: ({ id, user }) => ({
        url: `/edit/${id}`,
        method: "POST",
        body: { user },
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation<UserResponse, string>({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "POST",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: arg }],
    }),
  }),
});

export const {
  useGetUserListQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
  util: { getRunningQueriesThunk },
} = userApi;
export const { getUserList, createUser, getUserById } = userApi.endpoints;

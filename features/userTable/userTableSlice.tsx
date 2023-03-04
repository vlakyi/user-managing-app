import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "mocks/db";

type SortDirection = "asc" | "desc";
type SortField = keyof User;

interface TableState<TData> {
  sortField: keyof TData;
  direction: SortDirection;
}

const initialState: TableState<User> = {
  sortField: "userName",
  direction: "asc",
};

export const userTableSlice = createSlice({
  name: "userTable",
  initialState,
  reducers: {
    changeSortOrder: (state, action: PayloadAction<SortField>) => {
      // change sort direction if the same field is clicked
      if (state.sortField === action.payload) {
        state.direction = state.direction === "asc" ? "desc" : "asc";
      }
      // otherwise change the sort field and reset the direction
      else {
        state.sortField = action.payload;
        state.direction = "asc";
      }
    },
  },
});

export const { changeSortOrder } = userTableSlice.actions;

export default userTableSlice.reducer;

export type { SortField, TableState };

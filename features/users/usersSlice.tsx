import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "app/store";
import { HYDRATE } from "next-redux-wrapper";

interface UsersState {
  value: number;
}

const initialState: UsersState = {
  value: 0,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});

export const { increment, decrement, incrementByAmount } = usersSlice.actions;

export const selectUserState = (state: AppState) => state.users.value;

export default usersSlice.reducer;

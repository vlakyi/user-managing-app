import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { userApi } from "features/users/usersApi";
import userTableSlice from "features/userTable/userTableSlice";
import userDialogSlice from "features/userDialog/userDialogSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [userApi.reducerPath]: userApi.reducer,
      userTable: userTableSlice,
      userDialog: userDialogSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;

export const wrapper = createWrapper<AppStore>(makeStore);

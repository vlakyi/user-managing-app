import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "store";

interface DialogInitialState {
  isOpen: boolean;
  selectedUserId?: string;
}

const initialState: DialogInitialState = {
  isOpen: false,
};

export const userDialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.selectedUserId = action.payload;
    },
    closeDialog: (state) => {
      state.isOpen = false;
      state.selectedUserId = undefined;
    },
  },
});

export const { openDialog, closeDialog } = userDialogSlice.actions;
export const userDialogStateSelector = (state: AppState) => state.userDialog;
export default userDialogSlice.reducer;

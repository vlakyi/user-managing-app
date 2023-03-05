import { MouseEventHandler } from "react";
import { ButtonGroup, Button } from "components/Button";
import { Dialog } from "components/Dialog/Dialog";
import { StyledDialogText } from "./DeleteUserDialog.styled";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  closeDialog,
  userDialogStateSelector,
} from "features/userDialog/userDialogSlice";
import { User } from "mocks";
import { useGetUserByIdQuery } from "features/users/usersApi";

interface DeleteUserDialogProps {
  onDelete: (userId?: User["id"]) => void;
}

export function DeleteUserDialog({ onDelete }: DeleteUserDialogProps) {
  const dispatch = useAppDispatch();
  const { isOpen, selectedUserId } = useAppSelector(userDialogStateSelector);

  const { data } = useGetUserByIdQuery(selectedUserId, {
    skip: !selectedUserId,
  });

  const onClose: MouseEventHandler<HTMLElement> = (event) => {
    event.stopPropagation();

    if (event.target !== event.currentTarget) return;
    dispatch(closeDialog());
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog onClose={onClose}>
      <Dialog.Header>
        <h2>Delete</h2>
      </Dialog.Header>
      <Dialog.Content>
        <StyledDialogText>
          Are you sure you want to delete {data?.user?.username}?
        </StyledDialogText>
        <ButtonGroup>
          <Button color="neutral" onClick={onClose}>
            Cancel
          </Button>
          <Button color="danger" onClick={() => onDelete(selectedUserId)}>
            Delete
          </Button>
        </ButtonGroup>
      </Dialog.Content>
    </Dialog>
  );
}

import { useAppDispatch } from "store/hooks";
import { Button } from "components/Button";
import { openDialog } from "features/userDialog/userDialogSlice";
import { User } from "mocks";

interface DeleteUserButtonProps {
  userId: User["id"];
}

export function DeleteUserButton({ userId }: DeleteUserButtonProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openDialog(userId));
  };

  return (
    <Button color="danger" onClick={handleClick}>
      Delete
    </Button>
  );
}

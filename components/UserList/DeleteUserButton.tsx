import { Button } from "components/Button";
import { useDeleteUserMutation } from "features/users/usersApi";
import { User } from "mocks";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface DeleteUserButtonProps {
  userId: User["id"];
}

export function DeleteUserButton({ userId }: DeleteUserButtonProps) {
  const [deleteUser, { isError, error, data, isLoading }] =
    useDeleteUserMutation();

  const handleClick = () => {
    deleteUser(userId);
  };

  useEffect(() => {
    if (isError && error) {
      toast(`Failed to delete a user: ${userId}`, { type: "error" });
    }
  }, [error, isError, userId]);

  useEffect(() => {
    if (data?.user) {
      toast(`User: ${data.user.username} deleted successfully`, {
        type: "success",
      });
    }
  }, [data, userId]);

  return (
    <Button color="danger" onClick={handleClick}>
      Delete
    </Button>
  );
}

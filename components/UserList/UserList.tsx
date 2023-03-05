import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { TColumn, Table } from "components/Table";
import { Button } from "components/Button";
import { Card } from "components/Card";
import { DeleteUserDialog } from "components/DeleteUserDialog";
import { EditUserButton } from "./EditUserButton";
import { DeleteUserButton } from "./DeleteUserButton";

import { TableState } from "features/userTable/userTableSlice";
import { useDeleteUserMutation } from "features/users/usersApi";
import { closeDialog } from "features/userDialog/userDialogSlice";
import { useAppDispatch } from "store/hooks";

import { User } from "mocks";

interface UserListProps {
  users: User[];
  sortOrder: TableState<User>;
  toggleSort: (column: TColumn<User>) => void;
}

export function UserList({ users = [], sortOrder, toggleSort }: UserListProps) {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const [deleteUser, { isError, error, data }] = useDeleteUserMutation();

  const onDelete = (userId?: string) => {
    if (!userId) return;

    deleteUser(userId);
    dispatch(closeDialog());
  };

  useEffect(() => {
    if (isError && error) {
      toast("Failed to delete a user", { type: "error" });
    }
  }, [error, isError]);

  useEffect(() => {
    if (data?.user) {
      toast(`User: ${data.user.username} deleted successfully`, {
        type: "success",
      });
    }
  }, [data]);

  const columns: TColumn<User>[] = useMemo(
    () =>
      [
        {
          id: "id",
          header: "Id",
        },
        {
          id: "name",
          header: "Name",
        },
        {
          id: "username",
          header: "Username",
          sortable: true,
        },
        {
          id: "email",
          header: "Email",
        },
        {
          id: "city",
          header: "City",
        },
        {
          id: "edit",
          header: "Edit",
          accessor: (user) => <EditUserButton userId={user.id} />,
        },
        {
          id: "delete",
          header: "Delete",
          accessor: (user) => <DeleteUserButton userId={user.id} />,
        },
      ] satisfies TColumn<User>[],
    []
  );

  return (
    <>
      <Card>
        <Card.Header>
          <h1>User List</h1>
          <Button onClick={() => push("./add")}>Add new</Button>
        </Card.Header>

        <Card.Content>
          <Table
            columns={columns}
            data={users}
            toggleSort={toggleSort}
            sortOrder={sortOrder}
          />
        </Card.Content>
      </Card>

      <DeleteUserDialog onDelete={onDelete} />
    </>
  );
}

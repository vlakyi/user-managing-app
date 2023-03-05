import { useMemo } from "react";
import { User } from "mocks";
import { TColumn, Table } from "components/Table";
import { Button } from "components/Button";

import { TableState } from "features/userTable/userTableSlice";

import { useRouter } from "next/router";
import { Card } from "components/Card";
import { EditUserButton } from "./EditUserButton";
import { DeleteUserButton } from "./DeleteUserButton";

interface UserListProps {
  users: User[];
  sortOrder: TableState<User>;
  toggleSort: (column: TColumn<User>) => void;
}

export function UserList({ users = [], sortOrder, toggleSort }: UserListProps) {
  const { push } = useRouter();

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
          id: "userName",
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
  );
}

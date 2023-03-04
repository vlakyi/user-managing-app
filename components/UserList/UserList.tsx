import { useMemo } from "react";
import { User } from "mocks";
import { TColumn, Table } from "components/Table";
import { Button } from "components/Button";

import { TableState } from "features/userTable/userTableSlice";
import {
  StyledUserListContainer,
  StyledUserListHeader,
  StyledUserListHeaderContainer,
  StyledUserListTableContainer,
} from "./UserList.styled";
import Link from "next/link";
import { useRouter } from "next/router";

interface UserListProps {
  users: User[];
  sortOrder: TableState<User>;
  toggleSort: (column: TColumn<User>) => void;
}

export function UserList({ users = [], sortOrder, toggleSort }: UserListProps) {
  const { replace } = useRouter();

  const columns: TColumn<User>[] = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <StyledUserListContainer>
      <StyledUserListHeaderContainer>
        <StyledUserListHeader>User List</StyledUserListHeader>
        <Button onClick={() => replace("./add")}>Add new</Button>
      </StyledUserListHeaderContainer>

      <StyledUserListTableContainer>
        <Table
          columns={columns}
          data={users}
          toggleSort={toggleSort}
          sortOrder={sortOrder}
        />
      </StyledUserListTableContainer>
    </StyledUserListContainer>
  );
}

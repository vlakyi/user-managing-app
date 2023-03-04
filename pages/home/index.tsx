import { useMemo } from "react";
import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { wrapper } from "store";
import { useAppSelector } from "store/hooks";

import { TColumn, Table } from "components/Table";
import { changeSortOrder } from "features/userTable/userTableSlice";
import {
  getRunningQueriesThunk,
  getUserList,
  useGetUserListQuery,
} from "features/users/usersApi";

import { User } from "mocks";
import { useMockBrowserWorker } from "mocks/useMockBrowserWorker";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { server } = await import("../../mocks/server");
    server.listen();

    store.dispatch(getUserList.initiate({}));

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

const Home: NextPage = () => {
  const { shouldRender } = useMockBrowserWorker();
  const { data, error, isLoading } = useGetUserListQuery(
    {},
    {
      skip: !shouldRender,
    }
  );

  const dispatch = useDispatch();
  const sortOnClick = (column: TColumn<User>) => {
    if (!column.sortable) {
      return;
    }

    dispatch(changeSortOrder(column.id as keyof User));
  };

  const sortOrder = useAppSelector((state) => state.userTable);

  console.log({ data, error, isLoading });

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
    <div>
      <Table
        columns={columns}
        data={data?.users}
        toggleSort={sortOnClick}
        sortOrder={sortOrder}
      />
    </div>
  );
};

export default Home;

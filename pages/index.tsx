import { TColumn, Table } from "components/Table";

import {
  getRunningQueriesThunk,
  getUserList,
  useGetUserListQuery,
} from "features/users/usersApi";
import { User } from "mocks/db";
import { useMockBrowserWorker } from "mocks/useMockBrowserWorker";

import type { NextPage } from "next";
import { wrapper } from "store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { server } = await import("../mocks/server");
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

  console.log({ data, error, isLoading });

  // could be memoized with useMemo
  const columns: TColumn<User>[] = [
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
    },
    {
      id: "email",
      header: "Email",
    },
    {
      id: "city",
      header: "City",
    },
  ];

  return (
    <div>
      <Table columns={columns} data={data?.users} />
    </div>
  );
};

export default Home;

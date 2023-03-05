import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { wrapper } from "store";
import { useAppSelector } from "store/hooks";

import { TColumn } from "components/Table";
import { UserList } from "components/UserList";
import { changeSortOrder } from "features/userTable/userTableSlice";
import {
  getRunningQueriesThunk,
  getUserList,
  useGetUserListQuery,
} from "features/users/usersApi";

import { User } from "mocks";

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
  const { data, error, isLoading } = useGetUserListQuery({});

  const dispatch = useDispatch();
  const toggleSort = (column: TColumn<User>) => {
    if (!column.sortable) {
      return;
    }

    dispatch(changeSortOrder(column.id as keyof User));
  };

  const sortOrder = useAppSelector((state) => state.userTable);

  return (
    <UserList
      users={data?.users}
      toggleSort={toggleSort}
      sortOrder={sortOrder}
    />
  );
};

export default Home;

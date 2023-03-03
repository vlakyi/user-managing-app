import Head from "next/head";

import {
  getRunningQueriesThunk,
  getUserList,
  useGetUserListQuery,
} from "features/users/usersApi";
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
    { skip: !shouldRender }
  );

  console.log({ data, error, isLoading });

  return (
    <div>
      <Head>
        <title>User Managing App</title>
        <meta name="description" content="Next.js User Managing App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;

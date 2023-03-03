import { useEffect } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";

import { selectUserState } from "features/users/usersSlice";
import { useMockBrowserWorker } from "mocks/useMockBrowserWorker";

import type { NextPage } from "next";
import type { User } from "mocks/db";

export const getServerSideProps = async () => {
  const { server } = await import("../mocks/server");
  server.listen();

  const res = await fetch("https://api/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

interface HomeProps {
  users: User[];
}

const Home: NextPage = ({ users }: HomeProps) => {
  const countValue = useSelector(selectUserState);
  const { shouldRender } = useMockBrowserWorker();

  useEffect(() => {
    if (!shouldRender) return;

    async function fetchUsers() {
      const res = await fetch("https://api/users");
      const json = await res.json();
      console.log({ json });
    }

    fetchUsers();
  }, [shouldRender]);

  console.log({ countValue, users });
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

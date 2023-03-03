import { selectUserState } from "features/users/usersSlice";
import type { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";

const Home: NextPage = () => {
  const countValue = useSelector(selectUserState);

  console.log({ countValue });
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

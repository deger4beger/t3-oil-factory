import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>t3-store</title>
        <meta name="description" content="t3-store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        main content
      </main>
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import PageShell from "../components/page-shell";
import { trpc } from "../utils/trpc";


const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const test = trpc.useQuery(["example.test", { someData: "myData" }])

  return (
    <PageShell title="home">
      Main page { hello.data?.greeting }
      <br />
      Some test data: { JSON.stringify(test.data) }
    </PageShell>
  );
};

export default Home;

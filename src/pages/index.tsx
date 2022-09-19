import type { NextPage } from "next";
import { trpc } from "../utils/trpc";


const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const test = trpc.useQuery(["example.test", { someData: "myData" }])

  return (
    <>
      Main page { hello.data?.greeting }
      <br />
      Some test data: { JSON.stringify(test.data) }
    </>
  );
};

export default Home;

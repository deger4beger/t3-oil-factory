import type { NextPage } from "next";
import PageShell from "../components/page-shell";


const Home: NextPage = () => {

  return (
    <PageShell title="Home" isProtected={true}>
      Home page
    </PageShell>
  );
};

export default Home;

import type { NextPage } from "next";
import PageShell from "../components/page-shell";
import FrontInfo from "../features/home/front-info";


const Home: NextPage = () => {

  return (
    <PageShell title="Домашняя страница">
      <FrontInfo />
    </PageShell>
  );
};

export default Home;

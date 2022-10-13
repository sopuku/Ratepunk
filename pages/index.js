import Head from "next/head";
import HomeMain from "../Components/Home/HomeMain";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RATEPUNK</title>
        <meta
          name="description"
          content="Frontend developer pozicija RatePunk užduotis"
        />
      </Head>
      <HomeMain />
    </div>
  );
}
